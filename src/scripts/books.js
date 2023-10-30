const bookMainItem = document.querySelector('.task_two');
const giraffe = document.querySelector('.giraffe');
const chores = document.querySelector('.chores');
bookMainItem.addEventListener('click', () => {
    document.querySelector('.main_blocks').style.display = 'none'
    const booksCollections = document.querySelector('.books_collection')
    booksCollections.style.display = 'block';
    booksCollections.classList.add('active_now');
    document.querySelector('#pages').innerHTML = ''
})

function showBook(tagName, className, pageInnerElem, pageInnerElemAttribute) {
    let page = document.createElement(tagName);
    page.classList.add(className)
    document.querySelector('.pages').appendChild(page)
    let pageImg = document.createElement(pageInnerElem);
    pageImg.setAttribute('src', pageInnerElemAttribute)
    page.appendChild(pageImg);
    document.addEventListener('DOMContentLoaded', function () {
    })


    let pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        let page = pages[i];
        if (i % 2 === 0) {
            page.style.zIndex = (pages.length - i);
        }
    }
    for (let i = 0; i < pages.length; i++) {
        pages[i].pageNum = i + 1;
        pages[i].onclick = function () {
            if (this.pageNum % 2 === 0) {
                this.classList.remove('flipped');
                this.previousElementSibling.classList.remove('flipped');
            } else {
                this.classList.add('flipped');
                this.nextElementSibling.classList.add('flipped');
            }
        }
    }

}


chores.addEventListener('click', () => {
    document.querySelector('.book').style.display = 'block';
    document.querySelector('.books_collection').style.display = 'none'
    document.querySelector('.book').classList.add('active_now')
    for (let i = 1; i <= 16; i++) {
        showBook('div', 'page', 'img', 'src/images/books/DOING_MY_CHORES/' + i + '.jpg');
    }
})
giraffe.addEventListener('click', () => {
    document.querySelector('.book').style.display = 'block';
    document.querySelector('.books_collection').style.display = 'none'
    for (let i = 1; i <= 12; i++) {
        showBook('div', 'page', 'img', 'src/images/books/GINGER_THE_GIRAFFE/' + i + '.jpg');
    }
})




