import React from 'react'

function ClickFunction() {
    function ClickHandler(){
        console.log("Button is Clicked")
    }
  return (
    <div>
        <button onClick={ClickHandler}>Click Here</button>
    </div>
  )
}

export default ClickFunction