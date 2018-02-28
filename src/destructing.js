// 分割代入 - JavaScript | MDN
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// objectの引数をそれぞれキーごとに受け取る
const hoge = ({test, abc, ...rest}) => {
  console.log(test)
  console.log(abc)
  console.log(rest)
}

hoge({test:2, abc:'ABC', a: 1, b: 2})

console.log('=============')

const [a, b] = [1, 2]
console.log(a) // 1
console.log(b) // 2

console.log('-------------')

const [aa, bb, ...other] = [1, 2, 3, 4, 5]
console.log(aa) // 1
console.log(bb) // 2
console.log(other) // [3, 4, 5]

console.log('-------------')

const { aaa, bbb } = {aaa:1, bbb:2}
console.log(aaa) // 1
console.log(bbb) // 2

console.log('-------------')

const {c, d, ...other2} = {a:1, b:2, c:3, d:4} //ES2016 - Firefox 47a01 では未実装
console.log(c)
console.log(d)
console.log(other2)
