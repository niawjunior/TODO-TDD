const TodoController = require('../../controllers/todo.controller')
const TodoModel = require('../../model/todo.model')
const httpMock = require('node-mocks-http')
const newTodo = require('../mock/new-todo.json')
TodoModel.create = jest.fn()


describe('TodoController', () => {
  it('should have a createTodo function', () => {
    expect(typeof TodoController.createTodo).toBe('function')
  })
  it('should call TodoModel.create', () => {
    let req = httpMock.createRequest()
    let res = httpMock.createResponse()
    let next = null
    req.body = newTodo
    TodoController.createTodo(req, res, next)
    expect(TodoModel.create).toBeCalledWith(req.body)
  })
})