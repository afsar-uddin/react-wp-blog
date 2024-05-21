import React, { useState } from 'react'

function Hello(props) {
    const [fname, setFname] = useState('')
    


  return (
    <>
        <h2>Hello {props.name}</h2>
        <p>Your name: {fname}</p>
        <input type="text" onChange={(e) => setFname(e.target.value)} />
    </>
  )
}

export default Hello