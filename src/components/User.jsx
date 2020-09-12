import React from "react";

function User(props) {
  return (
    <div className="user">
      <img src={props.img} alt="user"></img>
      <div className="user--content">
        <h3 className="user--name">{props.name}</h3>
        <h3 className="user--city">{props.city}</h3>
      </div>
    </div>
  );
}

export default User;
