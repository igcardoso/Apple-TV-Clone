var menuMore = document.querySelector('.header-more-options');
const menuHome = document.querySelector('.menu-home');
const Away = document.querySelectorAll('.scroll');
const profileHeader = document.querySelector('header img');
	
window.disable = function disable() {
  menuMore.classList.remove('active')
  Away.forEach(Away => Away.classList.remove('active'));
  profileHeader.classList.remove('open-opacity');
  Away.forEach(Away => {
    Away.style.filter = 'brightness(1)';
  })
}

menuHome.addEventListener('click', ()=> {
  menuMore.classList.add('active');
  Away.forEach(Away => Away.classList.add('active'))
  profileHeader.classList.add('open-opacity');
  Away.forEach(Away => {
    Away.style.filter = 'brightness(.6)';
  })
})

Away.forEach(Away => {
  Away.addEventListener('click', ()=> {
    disable();
  });
})
