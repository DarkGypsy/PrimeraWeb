document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.navMenu').classList.toggle('show');
})

ScrollReveal().reveal('.Showcase');
ScrollReveal().reveal('.newscards' , { delay: 500});
ScrollReveal().reveal('.cardsbanner-one' , { delay: 500});
ScrollReveal().reveal('.cardsbanner-two' , { delay: 500});
