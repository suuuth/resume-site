
var aboutMe = document.querySelector('.about-me-js')

function aboutMeScroll () {
    var scrollAbout = header.clientHeight
    window.scroll({
        top: scrollAbout,
        behavior: 'smooth'
    })
}

aboutMe.addEventListener('click', aboutMeScroll)
