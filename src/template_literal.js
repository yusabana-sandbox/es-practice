const hoge = 'ほげ'
const fuga = 'ふが'
// console.log(`HOGE: ${hoge}`)

// テンプレートリテラルのタグ関数
const templateFunc = (strings, ...values) => {
  console.log('STRINGS => ', strings)
  // console.log(strings[0])
  // console.log(strings.raw[0])
  // console.log(strings.raw[1])

  console.log('VALUES => ', typeof(values), values)
}


// ${hoge} のところで配列のsplitされる位置となる
templateFunc`
hogeです${hoge}
です
`
templateFunc`${0} ${'foo'}`

console.log('-----------')


// タグ付けされたTemplate literal
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/template_strings
function template(strings, ...keys) {
  return (function(...values) {
    const dict = values[values.length - 1] || {}
    const result = [strings[0]]

    console.log('strings:', strings)
    console.log('keys:', keys)
    console.log('dict:', dict)
    console.log('result:', result)
    console.log('values', values)

    keys.forEach(function(key, i) {
      const value = Number.isInteger(key) ? values[key] : dict[key]
      result.push(value, strings[i + 1])
    })
    return result.join('')
  })
}

// const t1Closure = template`${0}${1}${0}!`
// console.log(t1Closure('Y', 'A'))  // "YAY!" 

const t2Closure = template`${1} OK NG Yes!! ${0} ${'foo'}!`
console.log(t2Closure('Hello', 'noon', {foo: 'World'}))  // "Hello World!"
