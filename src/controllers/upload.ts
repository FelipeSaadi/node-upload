import { RequestHandler } from "express"
import { unlink } from "fs/promises"
import sharp from "sharp"

sharp.cache(false)

export const uploadFile: RequestHandler = async (req, res) => {
  if (req.file) {
    const filename = `${req.file.filename}.jpg`

    await sharp(req.file.path)
      .resize(300, 300)
      .toFormat('jpeg')
      .toFile(`./public/media/${filename}`)

    await unlink(req.file.path)

    res.json({ image: `${filename}` })
  }
  else {
    res.status(400)
    res.json({ error: 'Invalid file' })
  }
}