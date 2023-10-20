const bookMainItem = document.querySelector('.task_two');
bookMainItem.addEventListener('click',()=>{
    document.querySelector('.main_blocks').style.display = 'none'
    document.querySelector('.book').style.display = 'block'
})
function showBook(tagName,className,pageInnerElem,pageInnerElemAttribute) {
    let page =  document.createElement(tagName);
    page.classList.add(className)
    document.querySelector('.pages').appendChild(page)
    let pageImg = document.createElement(pageInnerElem);
    pageImg.setAttribute('src',pageInnerElemAttribute)
    page.appendChild(pageImg)
}
// for(let i=1;i<=15;i++){
//     showBook('div','page','img','src/images/books/DOING_MY_CHORES/' + i + '.jpg');
//
// }
for(let i=1;i<=11;i++){
    showBook('div','page','img','src/images/books/GINGER_THE_GIRAFFE/' + i + '.jpg');

}


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




