const { Router } = require('express')
const { StatusCodes } = require('http-status-codes')

const routes = Router()

routes.get('/problems', async (req, res) => {
  return res
    .send(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not implemented yet' })
})

routes.get('/users/:user', async (req, res) => {
  const { user } = req.params
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not implemented yet' })
})

routes.get('/users/:user/submissions', async (req, res) => {
  const { user } = req.params
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: 'Not implemented yet' })
})

module.exports = routes
