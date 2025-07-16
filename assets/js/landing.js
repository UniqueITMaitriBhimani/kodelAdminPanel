
// Highlight text js
const typed = new Typed("#highlight-typed", {
  stringsElement: '#typed-strings',
  strings:['<span class="highlight-text" >Default</span>','<span class="highlight-text" >E-commerce</span>','<span class="highlight-text" >Project</span>'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

$(".toggle-menu").on("click", function () {
  $(".landing-menu").toggleClass("open");
});
$(".menu-back").on("click", function () {
  $(".landing-menu").toggleClass("open");
});