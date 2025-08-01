import React from 'react'

const Hello =()=>{
    // return(
        // <>
            // <h1>hello AJX</h1>
        // </>
    // )
    return React.createElement('div',null,React.createElement('h1',null,'Hello JSX'))
}

export default Hello