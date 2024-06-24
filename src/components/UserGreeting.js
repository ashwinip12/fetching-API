import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state={
                isLoggedIn :
                false
        }
    }

  render() {
    return (this.state.isloggedIn ?
    (<div> welcom</div>):
    (<div>welcome ashwini</div>))
    
    return (
        <div>
      {/*<div>welcome</div>
     <div> welcome guest</div>*/}
      </div>
    )
  }
}

export default UserGreeting