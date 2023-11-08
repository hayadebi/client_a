// main.js
require('dotenv').config();
const fs = require('fs');
const messageModule = require('./message');

// 環境変数からデータを取得
const name = process.env.NAME;
const number = process.env.NUMBER;

// messageモジュールのcreateメソッドを実行して結果を取得
const message = messageModule.create(name, number);

// fsモジュールを利用して結果を外部ファイルに書き出す
fs.writeFile('result.txt', message, (err) => {
  if (err) {
    console.error('ファイルの書き出しに失敗しました。', err);
    return;
  }
  console.log('結果がresult.txtに書き出されました。');
});
