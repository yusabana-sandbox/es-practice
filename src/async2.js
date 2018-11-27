const sampleResolve = value => {
  return new Promise(resolve => {
    setTimeout(() => { 
      resolve(value * 2)
    }, 2000)
  })
}

const sampleAsync = async () => {
  const a = await sampleResolve(5)
  const b = await sampleResolve(10)
  const c = await sampleResolve(20)
  return a + b + c
}

const samplePromise = () => {
  let result = 0

  return sampleResolve(5).then(val => {
    console.log('a', result, val)
    result += val
    return sampleResolve(10)
  })
  .then(val => {
    console.log('b', result, val)
    result += val;
    return sampleResolve(20)
  })
  .then(val => {
    console.log('c', result, val)
    result += val
    return result
  })
}

sampleAsync().then(result => {
  console.log('async/await', result)
})

samplePromise().then(result => {
  console.log('promise', result)
})
