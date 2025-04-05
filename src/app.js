import express from 'express'
import routes from './routes.js'

const app = express()

//Indicar para o Express que as requisições serão no formato JSON
app.use(express.json())

// usar o router
app.use(routes)

export default app
