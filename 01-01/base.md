### this
* this 的指向取决于调用，而不是定义
* 沿着作用域向上找最近的一个 function，看这个 function 最终是怎样执行的。
```js
// 普通调用
foo() // => 全局对象(不能说window，浏览器中调用才是，node中为global)，严格模式 undefined

// new
new foo() // => foo {}

// call / apply / bind 传入啥就是啥
foo.call('123') // => '123'
foo.call('abc') // => 'abc'
```

### 正则组命名
```js

var date = '2020-05-20'
var reg = /(?<year>\d{4})-(?<mouth>\d{2})-(?<day>\d{2})/
var res = reg.exec(date)
console.log(res.groups)
```

### 环视 
```js
const intro = '张三是张三，张三丰是张三丰，张三不是张三丰，张三丰也不是张三'

// 向后否定
// const res = intro.replace(/张三(?!丰)/g, '李四')
// 向后肯定
const res = intro.replace(/张三(?=丰)/g, '李四')

// 'A00 B00'.replace(/(?<=A)00/g, '88')
// 'A00 B00'.replace(/(?<!A)00/g, '88')

console.log(res)
```

