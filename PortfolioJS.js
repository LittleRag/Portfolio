let intro = document.querySelector('.intro')
    let logo = document.querySelector('.logo-header')
    let logoSpan = document.querySelectorAll('.logo')
    



    
    window.addEventListener('DOMContentLoaded',()=>{
      setTimeout(()=>{
        logoSpan.forEach((span,idx) => {
          setTimeout(()=>{
            span.classList.add('active')
        }, (idx+1)*400);
      });




      setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
          setTimeout(()=>{
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx+1)*50)
        })


      },2000);
      setTimeout(() => {
        intro.style.top= '-100vh'
      },3300);
    })
  })



let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = 
[
                 "I have played the drums for just about 12 years",
                 "I was on the national team in Judo which is a martial art.",
                 "Other than coding, I also enjoy doing research, surveys and analytics.",
                 "Plants and gardening is a big part of my spare time.",
                 "I really enjoy problemsolving.",
                 "I enjoy making ambiance music.",
                 "I am mostly self-thought in HTML, CSS and JavaScript.",
                 "I have a bachelors degree in sociology."
];

btn.addEventListener("click", function(){
  var randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
  output.innerHTML = randomQuote;
})








// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
  var button = el.querySelector('a[data-toggle="dropdown"]'),
      menu = el.querySelector('.dropdown-menu'),
      arrow = button.querySelector('i.icon-arrow');

  button.onclick = function(event) {
    if(!menu.hasClass('show')) {
      menu.classList.add('show');
      menu.classList.remove('hide');
      arrow.classList.add('open');
      arrow.classList.remove('close');
      event.preventDefault();
    }
    else {
      menu.classList.remove('show');
      menu.classList.add('hide');
      arrow.classList.remove('open');
      arrow.classList.add('close');
      event.preventDefault();
    }
  };
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};


























window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
