import React, { useState } from 'react'

function fib(n, preValues=[]){
  if (preValues[n] !=null){
    return preValues[n]
  }
  let results
  if(n<=2){
    results = 1
  }else{
    results = fib(n-1,preValues) + fib(n-2,preValues) 
  }
  preValues[n]=results
  return results
}


const CounterFunction = () => {
  //passing initial state directly
  const [count, setCount] = useState(4)
  const [input, setInput] = useState(0)

  //passing function version of our state for complex computation for our intitial state
  const [initialNumber, setInitialNumber] = useState(()=>fib(10))

  const [checked,setChecked] = useState(false)

  function decrementCount (){
    setCount(preCount=>preCount -1)
  }

  function incrementCount (){
    setCount(preCount=>preCount +1)
  }

  function handleChange(e){
    setInput(e.target.value)
    setInitialNumber(e.target.value)
  }

  function handleClick(){
    setChecked(!checked)
  }   

  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    <br></br>
    <input type="number" value={input} onChange={handleChange}></input>
    <p>The initial value: {initialNumber}</p>
    <br></br>
    <input type="checkbox" value={checked} onClick={handleClick}></input>
    </>
  )
}

export default CounterFunction