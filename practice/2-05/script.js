'use strict';

const num = Math.floor(Math.random() * 6);
const answer = parseInt(window.prompt('数当てゲーム、0〜5の数字を入力してね'));
let message;

if(answer === num) {
  message = 'あたり!';
} else if(answer < num) {
  message = '残念! もっと大きい';
} else if(answer > num) {
  message = '残念! もっと小さい';
} else {
  message = '0〜5の数字を入力してね';
}
window.alert(message);