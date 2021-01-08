'use strict';

const jsImg = document.querySelectorAll('.js-img');
jsImg.forEach(function (item, index) {
  item.onclick = function() {
    document.getElementById('bigimg').src = this.dataset.image;
  };
});