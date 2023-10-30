function mainMenu() {
    let activeNow = document.querySelector('.active_now');
    activeNow.style.display = 'none';
    activeNow.classList.remove('active_now')
    document.querySelector('.main_blocks').style.display = 'flex';
}

function closeMainMenu() {
    document.querySelector('.home_menu').classList.remove('menu_active');
    document.querySelector('header .close_btn').style.display = 'block'

}