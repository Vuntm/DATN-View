
let items = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 2;
console.log(items.length);

function loadShow() {
  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = 'none';
  items[active].style.opacity = 1;

  for (let i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${160 * stt}px) scale(${1 - 0.2 * stt})`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }

  stt = 0;
  for (let i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-160 * stt}px) scale(${1 - 0.2 * stt})`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}

loadShow();

function animateNext() {
  active = active + 1 < items.length ? active + 1 : 0;
  loadShow();
  if (active === items.length - 3) {
    let firstItem = items[0];
    items = Array.from(items);
    items.splice(0, 1);
    items.splice(items.length, 0, firstItem);
    active = 2;
    loadShow();
  }
}

function animatePrev() {
  active = active - 1 >= 0 ? active - 1 : items.length - 1;
  loadShow();
  if (active === 1) {
    let firstItem = items[0];
    items = Array.from(items);
    items.splice(0, 1);
    items.splice(items.length, 0, firstItem);
    active = 2;
    loadShow();
  }
}

next.onclick = function () {
  requestAnimationFrame(animateNext);
};

prev.onclick = function () {
  requestAnimationFrame(animatePrev);
};
let intervalId = setInterval(animateNext, 2000);

// const scrollToEndButton = document.getElementById('scroll-to-end-button');
// scrollToEndButton.addEventListener('click', () => {
//     window.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
// });
// const scrollToTopButton = document.getElementById('scroll-to-top-button');
// scrollToTopButton.addEventListener('click', () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });


//Sử lý sự kiện cuộn trang

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  var scrollHeight = window.pageYOffset;
  var headerHeight = header.offsetHeight;
  var newHeight = Math.max(headerHeight - scrollHeight * 0.3, 0); // Giảm kích thước chiều y đi 30% khi lướt xuống
  header.style.height = newHeight + "px";
});

