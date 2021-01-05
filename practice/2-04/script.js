'use strict';

const answer = window.prompt('ヘルプを見ますか？');

if(answer === 'yes') {
  window.alert('ヘルプを表示します');
  document.getElementById('index').textContent = 'ヘルプを表示しています';
} else if(answer === 'no') {
  window.alert('ヘルプを表示しません');
} else {
  window.alert('yesかnoでお答え下さい');
}