
var NavMenu = document.getElementById('nav')
var _nav = false

function showNav () {
    _nav = !_nav

    if (_nav) {
        NavMenu.style.display = "flex"
        setTimeout(function () { 
            NavMenu.classList.add('show')
         }, 100);
    } else {
        NavMenu.classList.remove('show')
        setTimeout(function () { 
            NavMenu.style.display = ""
        }, 100);
    }
}

function hideNav () {
    if (_nav) {
        showNav ()
    }
}

document.getElementById('main-nav-btn').addEventListener('click', showNav)
document.getElementById('close-nav').addEventListener('click', showNav)
