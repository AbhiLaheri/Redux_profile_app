import React, { Component } from "react/index.js";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  // componentDidMount(){
  // }

  render() {
    // const { classes } = this.props;
     const {profile_details } = this.props;

    return (
   <div>
       {/* <TextField
                value={login.password}
                onChange={event => setPassword(event.target.value)}
               />
              */}
            <h1>hello{profile_details.name}</h1>
   </div>
    );
  }
}

