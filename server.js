
var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var pages = {}

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
  var id = Object.keys(pages).length
  pages[id] = page
}

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', function (request, response) {
  response.render('pages/index', {
    pages: pages,
    url: request.url
  })
})
app.get('/resume', function (request, response) {
  response.render('pages/resume', {
    //pages: pages[request.params.id]
    pages: pages
  })
})
app.get('/portfolio', function (request, response) {
  response.render('pages/portfolio', {
    pages: pages,
    url: request.url
  })
})

app.listen(port)
