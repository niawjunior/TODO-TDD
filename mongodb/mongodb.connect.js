const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://admin:eDfvOOWVoVk9mYyc@cluster0-dntln.mongodb.net/todo-tdd?retryWrites=true&w=majority',
    { useNewUrlParser: true})
  } catch(e){
    console.log(e)
    console.log('Error connecting to mongodb')
  }
}

module.exports = { connect }