'use strict';

if(window.confirm('ゲームスタート！準備はいい？')) {
  document.getElementById('index').textContent = 'ゲームを開始します';
} else {
  document.getElementById('index').textContent = 'ゲームを終了します';
}