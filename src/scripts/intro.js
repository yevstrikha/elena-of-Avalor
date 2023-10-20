
// document.querySelector('.main_blocks').style.display = 'none';
let userNameIntro = document.querySelector('#user_name')

const nextIntro = document.querySelector('.intro_next');
const okayIntro = document.querySelector('.intro_okay');
let currentImg = document.querySelector('.intro_img img');

let i = 1;

function loadIntro() {
    currentImg.setAttribute('src', 'src/images/intro/intro_' + (i) + '.jpg')
}

okayIntro.style.display = 'none';

nextIntro.addEventListener('click', nextImgIntro)

function nextImgIntro() {
    currentImg.setAttribute('src', 'src/images/intro/intro_' + (++i) + '.jpg');

    if (i === 2) {
        document.querySelector('#user_name').style.display = 'block';
    }else if(userNameIntro.value === '' || userNameIntro.value === null){
        alert('your name');
        currentImg.setAttribute('src', 'src/images/intro/intro_' + (--i) + '.jpg');

    }
    else {
        document.querySelector('#user_name').style.display = 'none';
    }

    if (i === 4) {
        nextIntro.style.display = 'none';
        okayIntro.style.display = 'block';
        document.querySelector('.intro_text').textContent = `So, ${userNameIntro.value}, here is my younger sister. Are you ready to start?`
        document.querySelector('.intro_text').style.display = 'block';
    }else {
        nextIntro.style.display = 'block';

    }
}

okayIntro.addEventListener('click', () => {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('header').style.display = 'block';
    document.querySelector('.main_blocks').style.display = 'flex';
})
loadIntro()