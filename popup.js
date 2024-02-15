console.log('Hi!');
// audio要素作成
const audio = document.createElement('audio')
// 音声ファイルを登録
const source = audio.appendChild(document.createElement('source'))
source.setAttribute('src', './sounds/correct001.mp3')
audio.appendChild(source)
document.body.appendChild(audio)
audio.play()
// 起動時以外のタイミングでplayを実行しないとエラーが起きるので関数を分けておく
function play () {
    // 音声再生
    audio.play()
      .then(function (result) {
        console.log('成功')
        console.log(result)
      })
      .catch(function (exception) {
        console.error('エラーが発生しました')
        console.error(exception)
      })
      .finally(function (result) {
        console.log('成功/失敗 共通処理')
        console.log(result)
      })
  }