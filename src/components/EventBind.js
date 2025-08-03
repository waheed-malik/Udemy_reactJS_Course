import React, { Component } from 'react'


class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'This is the button Undermeath'
      }
      this.ClickHnadler= this.ClickHnadler.bind(this)
    }

// ClickHnadler (){
//     this.setState({
//         message: 'The button has been Clicked'
//     })

//     console.log(this)
// }

// 4th way to bind the function
ClickHnadler= () =>{
    this.setState({
        message: 'by'
    })
}

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        
        {/* 1st way to bind the function */}
       {/* <button onClick={this.clickHandler.bind(this)}>Click Here</button> */}

       {/* 2nd way to bind the function */}
       {/* <button onClick={()=> this.ClickHnadler()}>Click Here</button> */}


       {/* 3rd and 4th way to bind the function */}
       <button onClick={this.ClickHnadler}>Click Here</button>
      </div>
    )
  }
}

export default EventBind