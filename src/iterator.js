// JavaScript の イテレータ を極める！ - Qiita
// https://qiita.com/kura07/items/cf168a7ea20e8c2554c6

let obj = {}
obj[Symbol.iterator] = function() {
  let iterator = {}
  let count = 1
  iterator.next = function() {
    let iteratorResult = (count <= 10) ? { value: count++, done: false } : { value: undefined, done: true }
    return iteratorResult
  }

  return iterator
}

const iterator = obj[Symbol.iterator]()
while(true) {
  const result = iterator.next()
  if (result.done) break
  console.log(result.value)
}

console.log('------------')

// forで直接iterator の value を取得する `for(v of iterable)` という構文
for(const v of obj) console.log(v)

console.log('------------')
console.log('--- ARRAY ---')
let alphabet = ['A', 'B', 'C'] // イテラブルなオブジェクト

for(const v of alphabet) console.log(v)

// 配列がイテラブルななオブジェクトかチェック
const iterator2 = alphabet[Symbol.iterator]()
console.log(typeof iterator2)
console.log(iterator2.next())

for(const v of alphabet.keys()) console.log(v)
for(const v of alphabet.entries()) console.log(v)

console.log('------------')
console.log('--- STRING ---')

const str = 'あいう'
for(const v of str) console.log(v)

// STRINGがイテラブルななオブジェクトかチェック
const iterator3 = str[Symbol.iterator]()
console.log(typeof iterator3)
console.log(iterator3.next())



console.log('------------')
console.log('イテラブルなオブジェクトを配列に変換する')
const ary = [0, 'A', false]
const s = 'あいう'

console.log([...ary, ...s])
console.log(Array.from(s))
