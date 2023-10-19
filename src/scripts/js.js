const fourNumbers = document.querySelector('.task_four');
fourNumbers.addEventListener('click', () => {
    document.querySelector('.numbers').style.display = 'block';
    document.querySelector('.main').style.display = 'none';
    mainNumbers.innerHTML = ''
    createTask()
})

const popUpNo = document.querySelector('.pop_up_no');
popUpNo.addEventListener('click', () => {
    document.querySelector('.pop_up').style.display = 'none';
    document.querySelector('.numbers').style.display = 'none';
    document.querySelector('.main').style.display = 'block';
    mainNumbers.classList.remove('blur');


})

const popUpYes = document.querySelector('.pop_up_yes');
    popUpYes.addEventListener('click', () => {
    document.querySelector('.pop_up').style.display = 'none';
    mainNumbers.classList.remove('blur');
    mainNumbers.innerHTML = ''
    createTask()

})

