
// run GIT PUSH HEROKU MASTER to update live site

/* TODO
*
*  Add scrollable css animations with waypoints.jquery lib
*  Consider adjusting style of embedded menus on nav
*/

var express = require('express')
var app = express()

var port = process.env.PORT || 8080
var pages = {}
var githubPages = {}

// Github project links
createPage({
  title: 'Firebase Project',
  location: 'https://suuuth-js-firebase-intro.surge.sh/',
  about: 'https://github.com/suuuth/MI-449-SS18-740-js-firebase-intro-T4LtxO/issues/1',
  project: true
})
createPage({
  title: 'Simple JavaScript Web Server',
  location: 'https://suuuth-js-server-intro.herokuapp.com/',
  about: 'https://github.com/suuuth/MI-449-SS18-740-js-server-intro-jtrO3q/issues/1',
  project: true
})
createPage({
  title: 'JavaScript LocalStorage Project',
  location: 'https://suuuth-js-localstorage.surge.sh/',
  about: 'https://github.com/suuuth/MI-449-SS18-740-js-localstorage-wMUDce/issues/1',
  project: true
})
createPage({
  title: 'JavaScript Objects Project',
  location: 'https://suuuth-js-objects.surge.sh/',
  about: 'https://github.com/suuuth/MI-449-SS18-740-js-objects-T4W3KQ/issues/1',
  project: true
})
createPage({
  title: 'package.json Project',
  location: 'https://suuuth-js-package-json-intro.surge.sh/',
  about: 'https://github.com/suuuth/MI-449-SS18-740-js-package-json-intro-AjvZZg/issues/1',
  project: true
})
createPage({
  title: 'Express Server with EJS Project',
  location: 'https://suuuth-js-serving-content-with.herokuapp.com/',
  about: 'https://github.com/suuuth/MI-449-SS18-740-js-serving-content-with-express-OctGcX/issues/1',
  project: true
})
createPage({
  title: 'API Project',
  location: 'https://github.com/suuuth/MI-449-SS18-740-js-create-an-api-with-express-URJy-_/blob/master/server.js',
  about: 'https://github.com/suuuth/MI-449-SS18-740-js-create-an-api-with-express-URJy-_/issues/1',
  project: true
})

// website page links
createPage({
  title: 'Home',
  heading: 'Welcome!',
  location: '/'
})
createPage({
  title: 'Resume',
  location: '/resume',
  media: '../../misc_assets/resume.pdf'
})
createPage({
  title: 'Github',
  location: 'https://github.com/suuuth'
})
createPage({
  title: 'Portfolio',
  heading: 'Portfolio',
  location: '/portfolio'
})

function createPage (page) {
  if (page.project) {
    let id = Object.keys(githubPages).length
    githubPages[id] = page
  } else {
    let id = Object.keys(pages).length
    pages[id] = page
  }
}

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', function (request, response) {
  response.render('pages/index', {
    pages: pages,
    githubPages: githubPages, // githubPages - needed for Nav (on every page) for the github submenu
    url: request.url
  })
})
app.get('/resume', function (request, response) {
  response.render('pages/resume', {
    pages: pages,
    githubPages: githubPages,
    url: request.url
  })
})
app.get('/portfolio', function (request, response) {
  let portfolio = require('./backend_js/portfolio_data.js')

  response.render('pages/portfolio', {
    pages: pages,
    githubPages: githubPages,
    url: request.url,
    portfolio: portfolio
  })
})

app.listen(port)
