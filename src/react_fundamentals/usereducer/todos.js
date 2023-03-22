import React, { useReducer, useState } from 'react'
import Listtodos from './Listtodos'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(todos,action){
  //handle the complex logic that updates our state
  switch(action.type){

    case ACTIONS.ADD_TODO:
      //we want to add a new todo
      return [...todos, newTodo(action.payload.name)]
    
    case ACTIONS.TOGGLE_TODO:
      //the logic to toggle the todo
      return todos.map(todo=>{
        if(todo.id===action.payload.id){
          return {...todo, complete: !todo.complete}
        }
        return todo
      }) 

    case ACTIONS.DELETE_TODO:
      return todos.filter(todo=>todo.id !==action.payload.id)
    
    default:
      return todos
      
  }

}

function newTodo(name){
  return {id: Date.now(), name:name, complete:false}
}

const Todos = () => {
  const [todos,dispatch]=useReducer(reducer,[])
  const [name, setName] =useState('')

function handleChange(e){
  setName(e.target.value)
}
// we add a todo upon submiting the form
function handleSubmit(e){
  e.preventDefault()
  dispatch({type: ACTIONS.ADD_TODO,payload:{name:name}})
  setName('')
}


  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange}></input>
    </form>
    {todos.map(todo=>{
    return <Listtodos key={todo.id} todo={todo} dispatch={dispatch}/>})
    }
    </>
  )
}

export default Todos