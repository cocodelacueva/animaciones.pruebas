import './assets/css/style.scss';
//import { smoothScroll } from './assets/js/helpers';
//import lazyLoadImages from './assets/js/lazy-load-images';
//import legalesModal from './assets/js/legales-modal';
//import animationsCSS from './assets/js/animations-css';

(function init() {
  const siteWrapper = document.querySelector('.site-wrapper');

  if (siteWrapper) {

    //do

    const html = document.documentElement;
    const canvas = document.getElementById('hero-lightpass');
    const context = canvas.getContext('2d');

    const frameCount = 50;
    const currentFrame = (index) => (
      `assets/images/frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
    );

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = 1158;
    canvas.height = 770;
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);

      canvas.style.opacity = (index * 20 / 1000 - 1) * -1;
    };

    window.addEventListener('scroll', () => {
      console.log('scrllin');
      const { scrollTop } = html;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount),
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });

    preloadImages();

  } else {
    //reload
    setTimeout(init, 1000);
  }
})();
