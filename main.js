let spNav = document.querySelector('.sp-nav');
let body = document.querySelector('body');
let bar = document.querySelectorAll('.nav-bar');

let nav = document.querySelector('nav');


spNav.addEventListener('click',function(){
   for (let i = 0; i < bar.length; i++) {
      bar[i].classList.toggle('show');
   }
  
   nav.classList.toggle('show');
   body.classList.toggle('show');
})

