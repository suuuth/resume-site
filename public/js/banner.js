/*
var header = window.document.getElementById('header')
var count = parseInt(window.localStorage.getItem('count'))

if (isNaN(count)) {
  count = 0
  count = window.localStorage.setItem('count', count)
} else {
  count = count + 1
  if (count === 4) {
    count = 0
  }
  window.localStorage.setItem('count', count)
}

setBanner()
function setBanner () {
  if (count === 0) {
    header.style.backgroundImage='url(../../../images/banners/the-who.jpg)'
    header.style.backgroundPosition='70% 20%'
  } else if (count === 1) {
    header.style.backgroundImage='url(../../../images/banners/skyValley-banner.jpg)'
    header.style.backgroundPosition='0% 0%'
    header.style.backgroundColor='black'
  } else if (count === 2) {
    header.style.backgroundImage='url(../../../images/banners/pink-floyd.jpg)'
    header.style.backgroundPosition = '100% 53%'
  } else {
    header.style.backgroundImage='url(../../../images/banners/david-bowie.jpg)'
    header.style.backgroundPosition=''
  }
}
*/