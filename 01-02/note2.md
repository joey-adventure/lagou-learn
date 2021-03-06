### 引用计数算法
##### 内部通过一个引用计数器，来维护每个对象的引用数值，通过判断这个对象是否为0，来判断该对象是否是个垃圾对象，从而回收
* 优点：即使回收垃圾；减少卡顿现象，内存即将占满时就会工作，从而让内存空间总是有可用的地方
* 缺点：无法回收循环引用的对象；对于资源的消耗比较大（维护计数器） 

### 标记清除算法
##### 第一阶段，遍历所有对象，然后对当前活动对象进行标记
##### 第二阶段，对没有标记的对象进行清除，释放垃圾对象所占的空间
* 优点：相对引入计数算法可以解决循环引用不能回收的问题
* 缺点：容易造成空间碎片化的问题，导致空间没法得到最大化的使用；不能立即回收对象

### 标记整理算法
##### 相比上面的标记清除算法，标记整理算法会将使用空间进行整理，从而解决空间碎片化的问题

## v8引擎
##### 现主流的JavaScript执行引擎，
##### 并且内存是有设置上限的（64位：不超过1.5G，32位：不超过800M）
* 因为JS主要是网页应用，这内存已经足够用了，且由于其垃圾回收机制，超过上限会导致回收时间较长
##### 采用分代回收思想实现垃圾回收

* 新生代对象：存活时间较短的，64位：32M，32位：16M，
* 老生代对象：存活时间较长的对象（全局变量，闭包中放置的变量数据）64位：1.4G，32位：700M，

### 新生代对象回收机制
1. 将新生代内存划分为两个等大的空间（使用空间from，空闲空间to）
2. 一个新的活动对象，会先放到from中，对其进行**标记整理**后，拷贝至to，然后完全清除from，再将to与from区域互换

**晋升：当活动对象占用的空间达到25%，或经历5次以上的回收还存在，则会将其放至老生代对象中，若存在超过25%的对象，此时新进来的对象也超过25%，则会导致复制操作无法完成**

### 老生代对象回收机制
* 主要采用标记清除，标记整理，增量标记算法
* 通常使用标记清除算法，当新生代对象晋升，需方放到老生代，而且此时又超过老生代空间，老生代就会采用标记整理，进而存放产生的新生代对象
* 

### 增量标记
* 进行垃圾回收算法时，使得应用暂停下来，等回收执行完毕才能继续应用逻辑。
* 在老生代回收中，由于存活对象比较大，会导致垃圾回收时带来更严重的卡顿。
* 增量标记可将标记过程拆成更细的粒度，让标记和应用逻辑交替进行，而不是一口气完成垃圾回收，这样可以大大减少卡顿

## 判读是否有频繁的垃圾回收
### why: 
* GC工作时应用程序是停止的
* 频繁且过长的GC会导致应用假死
* 用户使用中感知应用卡顿

### 查看performance 中的timeline，观察内存是否频繁的上升下降；
### 页面区域稳定时，查看任务管理器中的内存值是否有大幅波动