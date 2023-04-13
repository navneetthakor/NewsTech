import React, { Component } from "react";
// import logo from '../../public/logo192.png'

export default class NewsIteam extends Component {
  
  render() {
    let {title,disc,imgurl,url} = this.props;
    return (
      <>
        <div className="card my-2 ">
          <img src={imgurl?imgurl:"https://s.yimg.com/uu/api/res/1.2/xZ_X3EY3OdV27CCZB4Mzsw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/d260ac20-d92d-11ed-bcbf-d1eb56be0f45.cf.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {disc}
            </p>
            <a href={url} className="btn btn-primary" target="_blank" rel="noreferrer">
              read more
            </a>
          </div>
        </div>
      </>
    );
  }
}
