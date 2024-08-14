import React from "react";
import PropTypes from "prop-types";

export const Card=(props)=> {


    const cardstyle = {
        "width": "25%",
    }
    return (

        <div className="card" style={cardstyle}>
        <img src="https://picsum.photos/200/300?random=1" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
}