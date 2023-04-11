import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Datafetching = () => {
    const [data, setData] =useState('')


    useEffect(()=>{
      // Optionally the request above could also be done as
axios.get('https://hst-api.wialon.com/wialon/ajax.html?svc=token/login', {
    params: {
      "token":"c87c6696df532c1cf1d7a2bec64a6c0cBAED9A128A98D3F51C1EBB9FE1D423B8EC4195F2"
    }
  })
  .then(function (response) {
    console.log(response);
    setData(response)
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
        
    },[])
  return (
    <>
    <p>{data}</p>
    </>
  )
}

export default Datafetching