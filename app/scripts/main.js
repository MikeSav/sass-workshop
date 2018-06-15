'use strict';

// so odd doing this without Angular!
function toggleMenu() {
  if (document.querySelector('.content').classList.contains('content--closed')) {
    document.querySelector('.content').classList.remove('content--closed');
  } else {
    document.querySelector('.content').classList.add('content--closed');
  }
}
