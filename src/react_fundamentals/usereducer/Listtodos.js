import React from 'react'
import { ACTIONS } from './todos'

export default function Listtodos({todo,dispatch}) {
    function handleToggleClick(){
        dispatch({type: ACTIONS.TOGGLE_TODO, payload:{id:todo.id}})
    }
    function handleDelete(){
        dispatch({type: ACTIONS.DELETE_TODO, payload:{id:todo.id}})
    }
  return (
    <div>
        <span style={{color: todo.complete? '#AAA' : '#000'}}>{todo.name}</span>
        <button onClick={handleToggleClick}>Toggle</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
