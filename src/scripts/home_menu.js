const homeMenu = document.querySelector('.home_btn');

homeMenu.addEventListener('click', ()=>{
    document.querySelector('.home_menu').classList.add('menu_active');
    document.querySelector('header .close_btn').style.display = 'none'
})
const closeMenu = document.querySelector('.home_menu .close_btn');
closeMenu.addEventListener('click', ()=>{
    document.querySelector('.home_menu').classList.remove('menu_active');
    document.querySelector('header .close_btn').style.display = 'block'

})