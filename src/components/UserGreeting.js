import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    };
  }

  render() {

    // 4th Way - Conditional rendering using Logical AND operator
        return this.state.isLogged && <div>Welcome User you are logged in</div>

    // ✅ third way - Conditional rendering using Ternary Operator
    // return this.state.isLogged ? (
    //    <div>Welcome user You are logged in</div> 
    // ) : (
    //     <div>Welcome User You are nor logged in</div>
    // )

    // ✅ 2nd Way - Conditional rendering using variable    important
    /*
    let Message;
    if (this.state.isLogged) {
      Message = <div>Welcome User, You are Logged in</div>;
    } else {
      Message = <div>Welcome User, You are not logged in</div>;
    }
    return <div>{Message}</div>;
    */

    // ✅ 1st Way - Direct if/else return
    /*
    if (this.state.isLogged) {
      return (
        <div>
          Welcome User, You are logged in
        </div>
      );
    } else {
      return (
        <div>
          Welcome User, Log in
        </div>
      );
    }
    */

    // ✅ Default return (used if above blocks are commented)
    /*
    return (
      <div>
        <div>Welcome Waheed</div>
        <div>Welcome Guest</div>
      </div>
    );
    */

  }
}

export default UserGreeting;
