
// custom Waypoints.JS since the library seems to be no longer supported
// https://github.com/imakewebthings/waypoints/blob/master/lib/jquery.waypoints.js

var keyCounter = 0
var allWaypoints = {}

function Waypoint ( options ) {
    if (!options)
      throw new Error('No options passed to Waypoint constructor')
    if (!options.element)
      throw new Error('No element option passed to Waypoint constructor')
    if (!options.animation)
      throw new Error('No animation option passed to Waypoint constructor')

  this.key = 'waypoint-' + keyCounter
  this.element = options.element
  this.animation = options.animation
  this.offset = options.offset
  this.triggered = false

  allWaypoints[this.key] = this
  keyCounter = keyCounter + 1

  // console.log ( allWaypoints )

  let that = this
  window.addEventListener('scroll', function () {
    if ( !that.triggered )
      if ( that.element.getBoundingClientRect().top <= that.offset ) {
        that.element.classList.add(that.animation)
        that.element.classList.remove('waypoint-js')
        that.triggered = true
      }
  })
}

// get and loop through every element with a declared waypoint
var waypoints = document.getElementsByClassName('waypoint-js')
for ( let point of waypoints ) {
  var waypoint = new Waypoint({
    element: point,
    animation: point.getAttribute('animation'),
    offset: window.innerHeight / 1.6
  })
}


// *
// *
// * display welcome message on home page *
// *

if ( document.querySelector('.url-js').getAttribute('url') == '/' ) {

  function hireMe () {
    window.location.href = window.location.href + 'resume'
  }

  console.log('%c Hello!', 'font-weight: bold; font-size: 50px; text-shadow:1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black;')
  console.log('%c I really love having a job!  If you would like to give me one, just type %chireMe() %cin the console here to find all the information you may need!  Have a day!', 'font-weight: normal; font-size: 20px; line-height: 1.2;', 'font-weight: bold; font-size: 26px; line-height: 1.2; text-shadow:1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black;', 'font-weight: normal; font-size: 20px; line-height: 1.2;')
}
