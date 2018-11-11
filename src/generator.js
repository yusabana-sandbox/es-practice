// JavaScript の ジェネレータ を極める！ - Qiita
// https://qiita.com/kura07/items/d1a57ea64ef5c3de8528
// iteratableなnext()などを持っていてyieldで処理を差し込むことができる(yieldが実行するとイテレータリザルトとして {value: xx, done: false} のオブジェクトが返される)
// 普通の関数と違うてん
//   - ジェネレータ関数は `function* gfn() {}` または `const gfn = function*() {}` のように `function` の後に `*` を記述する必要がある
//   - ジェネレータ関数では `yield` 及び `yield*` を使うことができる

function* gfn(from, to){ 
  while(from <= to) yield from++ // 後置incrementで yield に渡されたあとにインクリメントされる
}
const g1 = gfn(1, 20)
for(const num of g1) console.log(num)


console.log('--------------')

function* gfn2() {
  let a = yield 0
  yield* [1, a, 5]  // yield* にはいてラブルなオブジェクトを与えて順に yield を行ってくれる
}

const g2 = gfn2()
console.log(g2.next())
console.log(g2.next('hoho')) // 一旦停止している yield 0 の値が 3 に置き換わり a = 'hoho' が実行される
console.log(g2.next())
console.log(g2.next())
console.log(g2.next())

console.log('--------------')

function* gfn3(n) {
  n++
  yield n
  n *= 2
  yield n
  n = 0
  yield n
}

const g3 = gfn3(10)
console.log(g3.next())
console.log(g3.next())
console.log(g3.next())
console.log(g3.next())


console.log('--------------')
console.log('ジェネレータに値を渡す')

const gfn4 = function*() {
  let a = yield 'first'
  let b = yield 'second'
  yield a + b
}

const g4 = gfn4()
console.log(g4.next())
console.log(g4.next(3)) // a に代入される
console.log(g4.next(2)) // b に代入される
// g.next(3) などを実行することで、ジェネレータ関数の中身に値を渡しています。
// 渡した値は、 **直前にいったん停止した yield **と置き換えられたように渡されます。

console.log('--------------')
console.log('yield*')

const gfn5 = function*() {
  yield* [1, 3, 5]
  console.log('bbbbbbbbbb')
  yield* 'ひよこ'
}
const g5 = gfn5()
console.log(g5.next())
console.log(g5.next())
console.log(g5.next())
console.log(g5.next())
console.log(g5.next())
console.log(g5.next())
console.log(g5.next())


console.log('--------------')
console.log('Tipsサンプル')

const gfn6 = function*() {
  yield 1
  yield* [2,1,2]
}
for(const num of gfn6()) console.log(num)

console.log( [...gfn6()] ) // [1, 2, 1, 2]

console.log( Math.max(...gfn6()) ) // 2

const [a, b, c, d] = gfn6()
console.log(a, b, c, d) // 1, 2, 1, 2

console.log( new Set(gfn6()) ) // Set {1, 2}


console.log('--------------')
console.log('途中で停止できる関数として利用')

function* gfn7(){
  console.log('> こんにちは！'); yield
  console.log('> 良い天気ですね。'); yield
  console.log('> さようなら！')
}
const g7 = gfn7()
// このnextを document.onclick = function(){ g.next(); } のように実行するとボタンに応じて非同期処理をできる
g7.next()
g7.next()
g7.next()



console.log('--------------')
console.log('フィボナッチ')

function* fibonacci(){
  let a = 0, b = 1, temp
  while(true) {
    temp = a + b
    a = b, b = temp
    yield a
  }
}

const g = fibonacci()
for(const num of g){
  if(num > 100) break
  console.log(num)
}
