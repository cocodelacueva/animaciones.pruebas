import { smoothScroll } from './helpers'

export default function legalesModal (wrapper) {
    var btnLegal = wrapper.querySelector('.togle-legal');
    
    if (btnLegal) {
        var wrapperLegales = document.querySelector('.legal-wrapper');
        var btnCloseLegal = wrapperLegales.querySelector('.close-legal');
        

        btnLegal.addEventListener('click', function () {
            
            if (btnLegal.classList.contains('active')) {
                wrapperLegales.classList.remove('active');
                wrapperLegales.style.height = 0;
                btnLegal.classList.remove('active');
            } else {
                wrapperLegales.classList.add('active');

                wrapperLegales.style.height = (wrapperLegales.scrollHeight) + 'px';
                btnLegal.classList.add('active');

                //scroll up
                setTimeout(function() {
                
                    smoothScroll('.legal-wrapper');
                    //window.scrollTo(0, window.scrollY+(wrapperLegales.getBoundingClientRect().top) );
                
                }, 501);
            }
            
        });

        btnCloseLegal.addEventListener('click', function () {
            wrapperLegales.classList.remove('active');
            wrapperLegales.style.height = 0;
            btnLegal.classList.remove('active');
        });

    }
}