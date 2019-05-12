
var NavMenu = document.getElementById('nav')

function showNav () {
    NavMenu.style.display = "flex"
    setTimeout(function () {
        NavMenu.classList.add('show')
     }, 100);
}

function hideNav () {
    NavMenu.classList.remove('show')
    setTimeout(function () {
        NavMenu.style.display = ""
    }, 100);
}

document.getElementById('main-nav-btn').addEventListener('click', showNav)
document.getElementById('close-nav').addEventListener('click', hideNav)
