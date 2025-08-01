import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        const {name, username}=this.props
        return <h1>Welcome components {this.props.name} a.k.a  {this.props.username}</h1>
    }
}
export default Welcome