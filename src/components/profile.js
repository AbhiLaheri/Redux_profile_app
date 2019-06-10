import React, { Component } from "react/index.js";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.getAllData();
  }

  render() {
    const { profile_details, increment } = this.props;
    return (
      <div>
        <div style={{ width: "90%", margin: "20px auto" }}>
          <h3 className="text-center ">Welcome </h3>
          
          {profile_details.alert?<div class="alert alert-success text-right" role="alert">Data Found</div>:<div class="alert alert-danger text-right" role="alert">Loding......</div>} 
        
         
          <div className="row">
            {profile_details.allUserdata.slice(0, profile_details.end).map(row => (

              <div className="col-sm-3 mt-2" style={{ maxWidth: "50%" }}>
                <div className="card shadow-sm" style={{ minHeight: "320px" }}>
                  <Link to={{
                    pathname: '/detailProfile',
                    state: {
                      title: row.title,
                      url: row.url
                    }
                  }} > <img src={row.thumbnailUrl} className="card-img-top" alt="..." /> </Link>
                  <div className="card-body">
                    <p className="card-text">{row.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <center><button className="btn btn-primary mt-5" onClick={() => increment(profile_details.end)}>Get 1 more item</button></center>
        </div>
      </div>
    );
  }
}

