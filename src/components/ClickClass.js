import React, { Component } from 'react'

class  ClickClass extends Component {
    ClickHandler(){
        console.log("Button is Clicked from Class Component")
    }
    render(){
  return (
    <div>
        <button onClick={this.ClickHandler}>Press Here</button>
    </div>
  )
}
}
export default ClickClass