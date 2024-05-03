import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { notiController } from '~/controllers/notiController'
import { postController } from '~/controllers/postController'
import { notiValidation } from '~/validations/notiValidation'
import { postValidation } from '~/validations/postValidation'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'GET: API get list NOTI' })
  })
  .post(notiValidation.createNew, notiController.createNew)

Router.route('/:id')
  .get(notiController.getDetails)
  .put(notiValidation.updateNoti, notiController.updateNoti)

// API hỗ trợ việc di chuyển card giữa các column khác nhau trong một board

export const notiRoute = Router