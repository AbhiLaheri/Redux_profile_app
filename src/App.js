import React, { Component } from "react";
import ProfileCont from "./containers/profile_cont";
import Router_Cont from "./containers/router/router_cont";

class App extends Component {
  render() {
    // return <Routes_con />;
    return(
     <Router_Cont></Router_Cont>
    )
  }
}
export default App;
