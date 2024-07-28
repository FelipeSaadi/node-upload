import express, { ErrorRequestHandler, urlencoded } from 'express'
import 'dotenv/config'
import cors from 'cors'
import helmet from 'helmet'
import { router } from './routes/main'
import { MulterError } from 'multer'

const server = express()
server.use(helmet())
server.use(cors())
server.use(urlencoded({ extended: true }))
server.disable('x-pwered-by')
server.use(express.json())

server.use(router)

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(400)

  if (err instanceof MulterError) {
    res.json({ error: err.code })
  }
  else {
    console.log(err)
    res.json({ error: 'An error has occured' })
  }
}

server.use(errorHandler)

const port = process.env.PORT || 8000
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})