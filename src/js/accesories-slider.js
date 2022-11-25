const filterBtn = document.querySelectorAll('.filter__btn');
const wrapperSlide = document.querySelectorAll('.swiper-wrapper > li');

let countCard = document.querySelectorAll('.swiper-slide').length;
let countColumn = Math.ceil(countCard / 4);
let overWidh = countColumn * 285 + (countColumn - 1) * 20 + 'px';

// console.log(countCard);
// console.log(countColumn);

// console.log(overWidh);
// document.querySelector('.swiper-wrapper').style.width = overWidh;

document.addEventListener('click', function (event) {
  if (event.target.dataset.but != undefined) {
    const t = event.target.dataset.but;

    filterBtn.forEach(element => {
      if (element.dataset.but != t) {
        element.classList.remove('current');
      }
    });

    event.target.classList.toggle('current');

    wrapperSlide.forEach(element => {
      element.classList.add('slide-hide');
      element.classList.remove('swiper-slide');

      if (
        (element.dataset.card == 'product' && element.innerHTML.includes(t)) ||
        t === 'All'
      ) {
        // console.log('+++');

        element.classList.remove('slide-hide');
        element.classList.add('swiper-slide');
      }
    });

    countCard = document.querySelectorAll('.swiper-slide').length;
    countColumn = Math.ceil(countCard / 4);
    overWidh = countColumn * 285 + (countColumn - 1) * 20 + 'px';

    // console.log(countCard);
    // console.log(countColumn);

    a_swiper.slideTo(0);
    const elem = document.querySelector('.swiper-wrapper');
    switch (t) {
      case 'All':
        // console.log('жмак All');

        elem.classList.remove('wrapper-keyboard');
        elem.classList.remove('wrapper-mause');
        elem.classList.remove('wrapper-headset');
        break;
      case 'Headset':
        // console.log('жмак Headset');
        elem.classList.remove('wrapper-keyboard');
        elem.classList.remove('wrapper-mause');
        elem.classList.add('wrapper-headset');
        break;
      case 'Keyboard':
        // console.log('жмак Keyboard');
        elem.classList.remove('wrapper-headset');
        elem.classList.remove('wrapper-mause');
        elem.classList.add('wrapper-keyboard');

        break;
      case 'Mouse':
        // console.log('жмак Mouse');
        elem.classList.remove('wrapper-headset');
        elem.classList.remove('wrapper-keyboard');
        elem.classList.add('wrapper-mause');
        break;
    }
    a_swiper.updateSize();
    a_swiper.updateSlides();
    a_swiper.updateProgress();
    a_swiper.updateSlidesClasses();
  }
});

var a_swiper = new Swiper('.accesories-swiper', {
  setWrapperSize: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 6,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 6,
      },
      spaceBetween: 38,
    },

    1280: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      grid: {
        rows: 4,
      },
      spaceBetween: 20,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

a_swiper.on('resize', function () {
  a_swiper.update();
});

// console.log(overWidh);
document.querySelector('.swiper-wrapper').style.width = overWidh;

// a_swiper.updateSize();
// a_swiper.updateSlides();
// a_swiper.updateProgress();
// a_swiper.updateSlidesClasses();

// a_swiper.scrollbar.updateSize();
// console.log('update');
// a_swiper.removeSlide(0);
// a_swiper.slideTo(0);
