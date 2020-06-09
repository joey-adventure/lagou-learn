const fp = require('lodash/fp')
const { Maybe, Container } = require('./support.js')

/**
 * 练习1
 * 使用fp.add(x,y) 和 fp.map(f,x) 创建一个能让functor里的值增加的函数ex1
 */
let maybe = Maybe.of([5, 6, 1])
let ex1 = maybe.map(data => fp.map(fp.add(1), data))
console.log('ex1：', ex1._value)

/**
 * 练习2
 * 实现一个函数ex2，能够使用fp.first获取列表的第一个元素
 */
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])

let ex2 = xs.map(res => fp.first(res))
console.log('ex2：', ex2._value)

/**
 * 练习3
 * 实现一个函数ex3，使用safeProp和fp.first找到user的首字母
 */
let safeProp = fp.curry(function (x, o) { return Maybe.of(o[x]) })
let user = { id: 2, name: 'Albert' }

let ex3 = safeProp('name', user).map(res => res.split('')).map(res => fp.first(res))
console.log('ex3：', ex3._value)

/**
 * 练习4
 * 使用Maybe重写ex4，不要有if语句
 */
let _ex4 = function (n) {
    if(n) {return parseInt(n)}
}


let ex4 = (num) => Maybe.of(num).map(res => parseInt(res))
console.log('ex4：', ex4(55.32)._value)
