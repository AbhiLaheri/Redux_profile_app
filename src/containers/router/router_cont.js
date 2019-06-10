import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import AppRouter from "../../components/router/router";


export class Routes_con extends Component {

  render() {
    return (
      <AppRouter {...this.props} />
    );
  }
};

export const mapStateToProps = store => {
  return {

  };
};



export default connect(mapStateToProps, null)(Routes_con );