
let timeline = document.querySelector('.Cards')
timeline.onmousedown = () => {
    let pageX = 0;
  
    document.onmousemove = e => {
      if (pageX !== 0) {
        timeline.scrollLeft = timeline.scrollLeft + (pageX - e.pageX);
      }
      pageX = e.pageX;
    };
  
    // заканчиваем выполнение событий
    timeline.onmouseup = () => {
      document.onmousemove = null;
      timeline.onmouseup = null;
    };
  
    // отменяем браузерный drag
    timeline.ondragstart = () => {
      return false;
    };
  };

let leftB = document.getElementById('leftBtn')
let rightB = document.getElementById('rightBtn')
let countingT = document.querySelector('.counting')
let count = 1;

rightB.addEventListener('click', ()=>{
    timeline.style.scrollBehavior = 'smooth'
    timeline.scrollLeft += 285;
    if(count === 3){
        count = 3;
    } else {
        count++
    }
    countingT.innerHTML = count;
})
leftB.addEventListener('click', ()=>{
    timeline.style.scrollBehavior = 'smooth'
    timeline.scrollLeft -= 285;
    if(count === 1){
        count = 1;
    } else {
        count--
    }
    countingT.innerHTML = count;
})


function two() {
  document.querySelectorAll('[data-scroll-from]').forEach(function(button) {
    button.addEventListener('click', function() {
      const targetElement = this.getAttribute('data-scroll-to');
      document.getElementById(targetElement).scrollIntoView({ behavior: 'smooth' });
    });
  });
}
two();

