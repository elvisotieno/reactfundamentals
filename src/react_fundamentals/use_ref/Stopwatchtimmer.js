import React, {useEffect, useRef, useState} from 'react'

const Stopwatchtimmer = () => {
  const [name, setName] = useState('')
  const [seconds,setSeconds] = useState(0)
  const inputRenderCount =useRef(0)
  const inputElement = useRef()
  const prevName = useRef('')
  const timerId = useRef()

  function handleChange(e){
    setName(e.target.value)
  }

  useEffect(()=>{
    inputRenderCount.current=inputRenderCount.current+1})

  function focusInput(){
    inputElement.current.focus();

  }
  useEffect(()=>{
    prevName.current=name
  },[name])

  function startTimer(){
    timerId.current = setInterval(() => {
      inputRenderCount.current ++;
      setSeconds(prevSeconds=>prevSeconds+1);
    }, 1000);
  }

  function stopTimer(){
    clearInterval(timerId.current);
    timerId.current = 0
  }

  function resetTimer(){
    stopTimer();
    if(seconds){
      inputRenderCount.current++;
      setSeconds(0)
    }
  }
  return (
    <>
    <input ref={inputElement} type="text" value={name} onChange={handleChange}></input>
    <br></br>
    <div> My name is: {name} and it Used to be: {prevName.current}</div>
    <br></br>
    <span>Timer: {seconds} </span>
    <section>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
      <button onClick={resetTimer}>RESET</button>
    </section>
    <br></br>
    <div>Rendered: {inputRenderCount.current}</div>
    <br></br>
    <button onClick={focusInput}>NameField</button>

    </>
  )
}

export default Stopwatchtimmer