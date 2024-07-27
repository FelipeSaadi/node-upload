import express, { urlencoded } from 'express'
import 'dotenv/config'
import cors from 'cors'
import helmet from 'helmet'
import { router } from './routes/main'

const server = express()
server.use(helmet())
server.use(cors())
server.use(urlencoded({ extended: true }))
server.disable('x-pwered-by')
server.use(express.json())

server.use(router)

const port = process.env.PORT || 8000
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})