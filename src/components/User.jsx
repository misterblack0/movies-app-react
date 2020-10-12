import React from "react";

const User = ({ img, name, city }) => (
  <div className="user">
    <img src={img} alt="user"></img>
    <div className="user--content">
      <h3 className="user--name">{name}</h3>
      <h3 className="user--city">{city}</h3>
    </div>
  </div>
);

export default User;
