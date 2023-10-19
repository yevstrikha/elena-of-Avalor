const prevIntro = document.querySelector('.intro_prev');
const nextIntro = document.querySelector('.intro_next');
let currentImg = document.querySelector('.intro_img img');

let i = 1;

function loadIntro() {
    currentImg.setAttribute('src', 'src/images/intro/intro_' + (i) + '.jpg')
}

prevIntro.style.display = 'none';

nextIntro.addEventListener('click', nextImgIntro)
prevIntro.addEventListener('click',prevImgIntro)
function nextImgIntro() {
    currentImg.setAttribute('src', 'src/images/intro/intro_' + (++i) + '.jpg')
    prevIntro.style.display = 'block';
    if (i === 4) {
        nextIntro.style.display = 'none'
    }
}
function prevImgIntro() {
    nextIntro.style.display = 'block'

    currentImg.setAttribute('src', 'src/images/intro/intro_' + (--i) + '.jpg')
    prevIntro.style.display = 'block';
    if (i === 1) {
        prevIntro.style.display = 'none';

    }
}
loadIntro()