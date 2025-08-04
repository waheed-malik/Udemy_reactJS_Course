import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state ={
            username: '',
            comments: '',
            Orange:''
        }
    }

    handleUsernameChange =(event)=>{
        this.setState({
         username: event.target.value   
        })
    }

    handleCommentsChange =(event)=>{
        this.setState({
         comments: event.target.value   
        })
    }

    handleOrangeChange =(event)=>{
        this.setState({
         orange: event.target.value   
        })
    }

    handleSubmit =event=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.Orange}`)
        
    }
    

  render() {
const { username, comments,Orange} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
      <div>
        <label>User ID</label>
        <input type = "text" value={username} onChange={this.handleUsernameChange}/> 
        
      </div>
      <div>
        <label>Comment</label>
        <textarea value= {comments}
        onChange={this.handleCommentsChange}></textarea>
      </div>

      <div>
        <label>Orange</label>
        <select vlaue={Orange} onChange={this.handleOrangeChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
        </select>
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
      </form>
    )
  }
}

export default Form