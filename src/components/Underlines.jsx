import React from 'react'

const Underlines = ({children, color}) => {
  return (
    <>
        {children}
        <div className={`h-1 w-20 bg-${color} rounded-md my-5 mx-auto`}></div>
    </>
  )
}

export default Underlines