import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from '../../containers/profile_cont';
import DetailProfileCont from '../../containers/detailProfile_cont';



export default class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
       
        }
    }
 

    render() {
        return (
          <Router >
            <div>
           
          <Route exact path="/" component={Profile} />
          <Route exact path="/detailProfile" component={DetailProfileCont} />
         
          </div>
        
         </Router>
        )
    }
}