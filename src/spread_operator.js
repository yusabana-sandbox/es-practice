// [Javascript] ES6のスプレッド演算子（Spread Operator）を使いこなす - YoheiM .NET
// http://www.yoheim.net/blog.php?q=20161204

const arr1 = [1,2,3]
const arr2 = [10, 11, 12]
console.log([100, ...arr2, 200, ...arr1])


const obj = {'key1':'value1'}
function myFunction(x) {
  console.log(x) // undefined
}
myFunction(...obj)


function hoge(...args) {
  console.log(args)
}
hoge(1,3,33, 'aaaa', [2,2,2])



let person = {
  firstName : 'Yohei',
  lastName  : 'Munesada',
  age       : 31,
  city      : 'yokohama',
  favs      : ['Ramen', 'Tennis'],
}

const { firstName, lastName, ...others } = person
console.log('firstName:', firstName)
console.log('lastName:', lastName)
console.log('others:', others)
