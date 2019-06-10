import React, { Component } from "react";
import { connect } from "react-redux";
// import {
//   setEmail,

// } from "../../actions/login/login_action";
import Profile from "../components/profile";

export class ProfileCont extends Component {
  render() {
    // { console.log(this.props); }

    return <Profile {...this.props} />;
  }
}

export const mapStateToProps = store => {
  return {
    profile_details: store.profile_details,
   
  };
};

export const mapDispatchToProps = dispatch => {
  return {
   
    // setLogin: (store_token) => {
    //   dispatch(setLogin(store_token));
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCont);
