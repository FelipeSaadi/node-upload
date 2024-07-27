import { RequestHandler } from "express"

export const uploadFile: RequestHandler = async (req, res) => {
  console.log(req.files)
  res.json({})
}