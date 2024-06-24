// Burger menu
document.querySelector('.actions-header__burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.bottom-header__list').classList.toggle('open');
})