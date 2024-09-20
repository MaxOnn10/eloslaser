// const burgerMenu = document.querySelector('.burger-menu');
var updateButtons = document.getElementsByClassName('awards__item-button');
var cancelButtons = document.getElementsByClassName('awards__item-button--close');
var favDialogs = document.getElementsByClassName('awards__item-dialog');

// burgerMenu.addEventListener('click', function () {
//   this.classList.toggle('active');
// });

for (let i = 0; i < updateButtons.length; i++) {
  updateButtons[i].addEventListener("click", function() {
    favDialogs[i].showModal();
  });
}

for (let i = 0; i < cancelButtons.length; i++) {
  cancelButtons[i].addEventListener("click", function() {
    favDialogs[i].close();
  });
}