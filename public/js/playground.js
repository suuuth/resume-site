
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

  allWaypoints[this.key] = this
  keyCounter = keyCounter + 1

  console.log ( allWaypoints )
}

// the 'scroll' event only reliably fires when it's attached to the 'window', since that
// is the thing that is actually scrolling.  Not the individual elements.  So we need to
// fire an event when the /window/ is scrolled, and check every Waypoint to see if anything
// has been hit

// get and loop through every element with a declared waypoint
var waypoints = document.getElementsByClassName('waypoint-js')
for ( let point of waypoints ) {
  var waypoint = new Waypoint({
    element: point,
    animation: point.getAttribute('animation'),
    offset: window.innerHeight / 1.6
  })
}

// create the event function
window.addEventListener('scroll', function (e) {

  // check if any of our Waypoint offsets have been hit
  Object.keys(allWaypoints).forEach(function (waypoint) {

    // Because scroll calculations happen quickly and not incrementing by 1,
    // it is likely we may jump right over our Offset target.  To account for this,
    // we consider that we want the animations to happen as the user scrolls DOWN the page.
    // Because of this, we can check if the user is at the desired location, OR has passed the desired location
    if (
      allWaypoints[waypoint].element.classList.contains('waypoint') &&
      allWaypoints[waypoint].element.getBoundingClientRect().top <= allWaypoints[waypoint].offset
    ) {
      allWaypoints[waypoint].element.classList.remove('waypoint')
      allWaypoints[waypoint].element.classList.add(allWaypoints[waypoint].animation)
    }
  })
})





// *
// *
// * display welcome message on home page *
// *

// if ( document.querySelector('.url-js').getAttribute('url') == '/' ) {

//   function hireMe () {
//     window.location.href = window.location.href + 'resume'
//   }

//   console.log('%c Hello!', 'font-weight: bold; font-size: 50px; text-shadow:1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black;')
//   console.log('%c I really love having a job!  If you would like to give me one, just type %chireMe() %cin the console here to find all the information you may need!  Have a day!', 'font-weight: normal; font-size: 20px; line-height: 1.2;', 'font-weight: bold; font-size: 26px; line-height: 1.2; text-shadow:1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black;', 'font-weight: normal; font-size: 20px; line-height: 1.2;')
// }
