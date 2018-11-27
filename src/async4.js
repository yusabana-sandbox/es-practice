const sleepPromise = msec =>
  new Promise((resolve, reject) => setTimeout(resolve, msec))

const sleepPromiseReject = msec =>
  new Promise((resolve, reject) => setTimeout(reject, msec))

const func = async () => {
  console.log('Start', new Date())
  try {
    // sleepPromise(1000) // awaitをつけないとStartとEndがほぼ同時に出力される
    await sleepPromise(1000)
    // await sleepPromiseReject(1000)
  } catch (e) {
    console.log('error', e)
  }
  console.log('End  ', new Date())
}

func()
