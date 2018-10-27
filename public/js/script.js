
var showNav = false
var navBtn = document.getElementById('main-nav-btn')
var closeNavBtn = document.getElementById('close-nav')
var nav = document.getElementById('nav')
var header = document.getElementById('header')
var body = document.querySelector('main')
var footer = document.querySelector('footer')

function showHideNav () {
    showNav = !showNav

    if (showNav) {
        nav.style.display = "flex"
        setTimeout(function () { 
            nav.classList.add('show')
         }, 100);
    } else {
        nav.classList.remove('show')
        setTimeout(function () { 
            nav.style.display = ""
        }, 100);
    }
}

function hideNav () {
    if (showNav) {
        showHideNav ()
    }
}

navBtn.addEventListener('click', showHideNav)
closeNavBtn.addEventListener('click', showHideNav)
header.addEventListener('click', hideNav)
body.addEventListener('click', hideNav)
footer.addEventListener('click', hideNav)
