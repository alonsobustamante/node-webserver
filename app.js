require('dotenv').config()
const express = require('express')
const app = express()
const hbs = require('hbs')

const port = process.env.PORT

hbs.registerPartials(__dirname + '/views/partials', (err) => {})

app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Alonso Bustamante',
    titulo: 'Curso de node'
  })
})


app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Alonso Bustamante',
    titulo: 'Curso de node'
  })
})


app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Alonso Bustamante',
    titulo: 'Curso de node'
  })
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})