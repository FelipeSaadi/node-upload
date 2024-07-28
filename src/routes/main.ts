import { Router } from "express"
import multer from 'multer'
import * as uploadController from "../controllers/upload"

const upload = multer({
  dest: './tmp',
  fileFilter: (req, file, callback) => {
    const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png']
    callback(null, allowed.includes(file.mimetype))
  },
  limits: { fieldNameSize: 20000000 }
})

export const router = Router()

router.post('/upload', upload.single('avatar'), uploadController.uploadFile)