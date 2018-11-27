const sampleResolve = value => {
  return new Promise(resolve => {
    setTimeout(() => { 
      resolve(value * 2)
    }, 1000)
  })
}

const sample = async () => {
  for (let i = 0; i < 5; i++) {
    const result = await sampleResolve(i)
    console.log(result)
  }
  return 'ループ終わった'
}


sample().then(result => {
  console.log('async/await', result)
})

