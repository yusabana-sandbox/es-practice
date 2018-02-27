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
