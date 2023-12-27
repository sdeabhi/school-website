let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
  navbar.classList.remove('active');
};







var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    loop:true,
    grabCursor:true,
  });
  


  let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco =>{
  acco.onclick = () =>{
    accordion.forEach(dion => dion.classList.remove('active'));
    acco.classList.toggle('active');
  };
});