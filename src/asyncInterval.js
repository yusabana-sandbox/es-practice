// ES2017 async/await で sleep 処理を書く - Qiita
// https://qiita.com/asa-taka/items/888bc5a1d7f30ee7eda2
const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

// 最低間隔を確保したいタイプのリピート処理を行う関数
const intervalRepeater = async (callback, interval) => {
  while (true) {
    const startTime = Date.now(); // 時間計測用
    console.log('処理を始めるよ！')

    // 本処理と sleep を同時実行して最低間隔を確保する
    await Promise.all([callback(), sleep(interval)])

    console.log('処理が終わったよ！ 経過時間[ms]:', Date.now() - startTime)
  }
}

// resolve までに数秒(ランダム)かかるクエリのダミー
const dummyQuery = () => sleep(Math.random() * 2000);

// 最低でも 1秒 の間隔を挟みながらクエリを送る処理
intervalRepeater(dummyQuery, 1000);
