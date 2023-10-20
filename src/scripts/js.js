const fourNumbers = document.querySelector('.task_four');
fourNumbers.addEventListener('click', () => {
    document.querySelector('.numbers').style.display = 'block';
    document.querySelector('.main_blocks').style.display = 'none';
    mainNumbers.innerHTML = ''
    createTask()
})

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
    mainNumbers.innerHTML = ''
    createTask()

})













let pages = document.getElementsByClassName('page');
for(let i = 0; i < pages.length; i++){
    let page = pages[i];
    if (i % 2 === 0)
    {
        page.style.zIndex = (pages.length-i);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    for(let i = 0; i < pages.length; i++)
    {
        pages[i].pageNum = i + 1;
        pages[i].onclick=function()
        {
            if (this.pageNum % 2 === 0)
            {
                this.classList.remove('flipped');
                this.previousElementSibling.classList.remove('flipped');
            }
            else
            {
                this.classList.add('flipped');
                this.nextElementSibling.classList.add('flipped');
            }
        }
    }
})

