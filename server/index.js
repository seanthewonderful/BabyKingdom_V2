import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import handlerFunctions from './controller.js'

const app = express()
const port = 5599

// Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())

ViteExpress.config({ printViteDevServerHost: true })

//
const {getBabies, addBaby} = handlerFunctions

// Routes
app.get('/thebabies', getBabies)

app.post('/addbaby', addBaby)

// Server start
ViteExpress.listen(app, port, () => console.log(`Fluent in over 6 million forms of URLs, starting with http://localhost:${port}`))