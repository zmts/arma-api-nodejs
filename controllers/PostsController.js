const router = require('express').Router()

const actions = require('../actions/posts')
const BaseController = require('./BaseController')

class PostsController extends BaseController {
  static get router () {
    router.get('/', this.actionRunner(actions.ListAction))
    router.get('/:id', this.actionRunner(actions.GetByIdAction))
    router.post('/', this.actionRunner(actions.CreateAction))
    router.patch('/:id', this.actionRunner(actions.UpdateAction))
    router.delete('/:id', this.actionRunner(actions.RemoveAction))

    return router
  }
}

module.exports = PostsController
