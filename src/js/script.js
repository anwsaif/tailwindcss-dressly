const navbtn = document.querySelector('#nav-button');

navbtn.addEventListener('click', function(){
  document.querySelector('#nav-menu').classList.toggle('hidden');
  navbtn.classList.toggle('nav-active');
})
