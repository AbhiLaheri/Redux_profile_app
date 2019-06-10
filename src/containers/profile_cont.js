import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllData, increment

} from "../action/profile_action";
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
   
    getAllData: () => {
      dispatch(getAllData());
    },
    increment: (add) => {
      dispatch(increment(add));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCont);
