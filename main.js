let spNav = document.querySelector('.sp-nav');
let bar = document.querySelectorAll('.nav-bar');//ループするの忘れない

let nav = document.querySelector('nav');


spNav.addEventListener('click',function(){
   for (let i = 0; i < bar.length; i++) {
      bar[i].classList.toggle('show');
   }
  
   nav.classList.toggle('show');
})

//slidemenuにクラスをつけて出現


//for(let i = 0; i <= 3; i++){
//    bar.classList.add('shoe');
//}