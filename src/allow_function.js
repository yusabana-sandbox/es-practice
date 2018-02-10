// ES2015の新機能: 関数の新しい書き方「arrow 関数」 - Qiita
// https://qiita.com/niisan-tokyo/items/4aec6e01c2c8ffc5fc73

let normalFunc = function(x) {
  console.log(x)
}

let arrowFunc1 = (y) => {
  console.log(y)
}

let arrowFunc2 = (y) => console.log(y)

let arrowFunc3 = y => console.log(y)

let arrowFunc4 = y => 'aaa' // return もいらない

let arrowFunc5 = y => ({ a: 1, b: 2, message: y }) // オブジェクトリテラルをreturnする時は () で囲む必要がある

normalFunc('今までの関数')
arrowFunc1('アロー1関数式')
arrowFunc2('アロー2関数式')
arrowFunc3('アロー3関数式')
console.log(arrowFunc4('アロー4関数式'))
console.log(arrowFunc5('アロー5関数式'))



const arr = [1,2,3,4,5,10,11,12,13,14,15,22,23]

const arr1 = arr.filter(function(n) {
  return n % 2 == 0
})

const arr2 = arr.filter(n => n % 2 == 0)

console.log(arr)
console.log(arr1)
console.log(arr2)
