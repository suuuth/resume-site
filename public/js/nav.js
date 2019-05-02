
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

function hireMe () {
  window.location.href = window.location.href + 'resume';
}

console.log('%c Hello!', 'font-weight: bold; font-size: 50px; text-shadow:1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black;');
console.log('%c I really love having a job!  If you would like to give me one, just type %chireMe() %cin the console here to find all the information you may need!  Have a day!', 'font-weight: normal; font-size: 20px; line-height: 1.2;', 'font-weight: bold; font-size: 26px; line-height: 1.2; text-shadow:1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black;', 'font-weight: normal; font-size: 20px; line-height: 1.2;')
