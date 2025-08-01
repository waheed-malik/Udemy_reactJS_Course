import React from 'react';

const Greet=props=>{
  const {name, username}= props  // console.log(props)

  return (
    <div>
      <h1>
        Hello {name}, Your user name is {username}.
      </h1>
      {/* {props.children} */}
    </div>
  );

}
export default Greet;
