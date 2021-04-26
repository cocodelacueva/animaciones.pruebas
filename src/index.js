import './assets/css/style.scss';
//import { smoothScroll } from './assets/js/helpers';
//import lazyLoadImages from './assets/js/lazy-load-images';
//import legalesModal from './assets/js/legales-modal';
//import animationsCSS from './assets/js/animations-css';

(function init() {
    const siteWrapper = document.querySelector('.site-wrapper');
    
    if (siteWrapper) {

        //do
        console.log('This site is loaded');

        //legales modal
        //legalesModal(siteWrapper);

        //lazyloadimages
        // window.addEventListener('load', function(){
        //     const configImages = {
        //         contenedor: siteWrapper,//nodo contenedor
        //         claseContenedora: '.lazy-load-image',
        //         dimensiones : {
        //             mobile: 50,
        //             tablet: 768,
        //             desktop: 992,
        //         }
        //     }
        //     lazyLoadImages(configImages);
        // });

        //animations on view:
        // const animates = document.querySelectorAll('.animate');
        // if (animates.length > 0) {
        //     animationsCSS(animates);
        // }

    } else {
        //reload
        setTimeout(init, 1000);
    }
})();