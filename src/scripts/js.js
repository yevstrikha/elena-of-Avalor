
const popUpNo = document.querySelector('.pop_up_no');
popUpNo.addEventListener('click', () => {
    document.querySelector('.pop_up').style.display = 'none';
    document.querySelector('.numbers').style.display = 'none';
    document.querySelector('.main_blocks').style.display = 'flex';
    mainNumbers.classList.remove('blur');


})

const popUpYes = document.querySelector('.pop_up_yes');
    popUpYes.addEventListener('click', () => {
    document.querySelector('.pop_up').style.display = 'none';
    mainNumbers.classList.remove('blur');
    mainNumbers.innerHTML = '';
    mathWindow();
})

const mainClose = document.querySelector('.close_btn');
    mainClose.addEventListener('click',()=>{
       let activeNow = document.querySelector('.active_now');
       activeNow.style.display = 'none';
        activeNow.classList.remove('active_now')
        document.querySelector('.main_blocks').style.display = 'flex';

    })












