import React from 'react'

const Button = ({isActive,clicked}) => {
  return (
    <>
    
    <button className='generateButton' onClick={clicked}>{isActive ? "generate another " : "generate random details"}</button>
    </>
  )
}

export default Button