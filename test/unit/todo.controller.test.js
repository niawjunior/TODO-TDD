const TodoController = require('../../controllers/todo.controller')
const TodoModel = require('../../model/todo.model')
const httpMock = require('node-mocks-http')
const newTodo = require('../mock/new-todo.json')
TodoModel.create = jest.fn()

let req = httpMock.createRequest()
let res = httpMock.createResponse()
let next = null

describe('TodoController', () => {
  it('should have a createTodo function', () => {
    expect(typeof TodoController.createTodo).toBe('function')
  })
  it('should call TodoModel.create', () => {
    req.body = newTodo
    TodoController.createTodo(req, res, next)
    expect(TodoModel.create).toBeCalledWith(req.body)
  })
  it('should return 201 response code', () => {
    req.body = newTodo
    TodoController.createTodo(req, res, next)
    expect(res.statusCode).toBe(201)
    expect(res._isEndCalled).toBeTruthy()
  })
})