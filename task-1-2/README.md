# 1
### 引用计数算法
##### 内部通过一个引用计数器，来维护每个对象的引用数值，通过判断这个对象是否为0，来判断该对象是否是个垃圾对象，从而回收
* 优点：即使回收垃圾；减少卡顿现象，内存即将占满时就会工作，从而让内存空间总是有可用的地方

* 缺点：无法回收循环引用的对象；对于资源的消耗比较大（维护计数器）

  

# 2
#### 第一阶段，遍历所有对象，然后对当前活动对象进行标记
#### 第二阶段，对没有标记的对象进行清除，释放垃圾对象所占的空间
#### 第三阶段，对使用空间进行整理，从而解决空间碎片化的问题



# 3
#### 一个新的活动对象，会先放到from中，对其进行**标记整理**后，拷贝至to，然后完全清除from，再将to与from区域互换
#### 当活动对象占用的空间达到25%，或经历5次以上的回收还存在，则会将其放至老生代对象中，这个过程也成为晋升

# 4
#### 在v8老生代回收的时候，存活对象比较大，为了减少大量的标记带来的卡顿，会使用到增量标记算法
#### 增量标记可将标记过程拆成更细的粒度，让标记和应用逻辑交替进行，而不是一口气完成垃圾回收，这样可以大大减少卡顿

# 代码题
[./code1.js](./code1.js)
[./code2.js](./code2.js)




