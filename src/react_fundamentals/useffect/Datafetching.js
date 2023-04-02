import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Datafetching = () => {
    const [data, setData] =useState('')


    useEffect(()=>{
      // Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
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