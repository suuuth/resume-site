
// function aboutMeScroll () {
//     var scrollAbout = header.clientHeight
//     window.scroll({
//         top: scrollAbout,
//         behavior: 'smooth'
//     })
// }

// document.querySelector('.about-me-js').addEventListener('click', aboutMeScroll)
document.querySelector('.about-me-js').addEventListener('click', function () {
    var scrollAbout = header.clientHeight
    window.scroll({
        top: scrollAbout,
        behavior: 'smooth'
    })
    this.blur()
})
