import express from 'express'
import routes from './routes.js'

const app = express()

//indicar para o express ler body com json
app.use(express.json())
// usar o router

app.use(routes)

export default app
