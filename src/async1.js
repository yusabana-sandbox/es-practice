const sampleResolve = value => {
  return new Promise(resolve => {
    setTimeout(() => { 
      resolve(value * 2)
    }, 2000)
  })
}

const sampleAsync = async () => {
  const result = await sampleResolve(5)
  return result + 5
}

const samplePromise = () => {
  return sampleResolve(5).then(result => {
    return result + 5
  })
}

sampleAsync().then(result => {
  console.log('async/await', result)
})

samplePromise().then(result => {
  console.log('promise', result)
})
