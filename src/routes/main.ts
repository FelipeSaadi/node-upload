import { Router } from "express"
import multer from 'multer'
import * as uploadController from "../controllers/upload"

const upload = multer({
  dest: './tmp'
})

export const router = Router()

router.post('/upload', upload.fields(
  [
    { name: 'avatar', maxCount: 1 },
    { name: 'gallery', maxCount: 3 }
  ]
), uploadController.uploadFile)