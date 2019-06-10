import React, { Component } from "react";
import { connect } from "react-redux";
import {
  incrementCount,derementCount

} from "../action/detailProfile_action";
import DetailProfile from "../components/detailProfile";

export class DetailProfileCont extends Component {
  render() {
    // { console.log(this.props); }

    return <DetailProfile {...this.props} />;
  }
}

export const mapStateToProps = store => {
  return {
    profileDetails: store.profileDetails,
   
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    incrementCount: (add) => {
      dispatch(incrementCount(add));
    },
    derementCount: (add) => {
      dispatch(derementCount(add));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailProfileCont);
