import React, { Component } from "react";

// import Profile from "./profile";

export default class DetailProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const { incrementCount, derementCount, profileDetails } = this.props;
    return (
      <div >
        <h2 className="text-center mt-2">Detail Page</h2>
        <center>
          <div className="row text-center" style={{ width: "90%" }} >


            <div className="col-sm-12 mt-2">
              <div className="card">
                <img src={this.props.location.state.url} className="card-img-top shadow-sm" alt="..." style={{ height: 450, minWidth: 70 }} />
                <div className="card-body">
                  <p className="card-text">{this.props.location.state.title}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-2" style={{ width: "30%" }}>
            <div className="col-sm-4 ">
              <div className="card" >
                <button className="btn btn-primary " onClick={() => derementCount(profileDetails.count)}>-</button>
              </div>
            </div>
            <div className="col-sm-4 ">
              <div className="card" >
                <h3>{profileDetails.count}</h3>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card" >
                <button className="btn btn-primary " onClick={() => incrementCount(profileDetails.count)}>+</button>
              </div>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
