import React, { useState } from 'react'

function Hello(props) {
    const [fname, setFname] = useState('')
    
console.log(fname)

  return (
    <>
        <h2>Hello {props.name}</h2>
        <p>Your name: {fname}</p>
        <input type="text" onChange={(e) => setFname(e.target.value)} value ={fname}/>
    </>
  )
}

export default Hello