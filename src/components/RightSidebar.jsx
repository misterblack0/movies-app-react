import React from "react";
import User from "./User";
import users from "../users-data";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import SearchIcon from "@material-ui/icons/Search";

function RightSidebar() {
  return (
    <aside className="sidebar__right">
      <div className="sidebar__right--header">
        <NotificationsIcon fontSize="large" />
        <ChatBubbleIcon fontSize="large" />
        <img src="/img/profile_user7.jpg" alt="user"></img>
      </div>

      <div className="sidebar__right--body">
        <div className="heading">
          <h2>Online</h2>
          <span className="status online"></span>
        </div>

        <div className="users__container">
          {users.map((user) => (
            <User
              key={user.id}
              name={user.name}
              img={user.imgURL}
              city={user.city}
            />
          ))}
        </div>

        <div className="heading">
          <h2>Offline</h2>
          <span className="status offline"></span>
        </div>

        <div className="users__container offline--container">
          {users.map((user) => (
            <User
              key={user.id}
              name={user.name}
              img={user.imgURL}
              city={user.city}
            />
          ))}
        </div>
      </div>

      <div className="sidebar__right--footer">
        <form className="form--user">
          <button type="submit">
            <SearchIcon fontSize="large" />
          </button>
          <input
            className="input--user"
            type="text"
            name="user-query"
            placeholder="Search User"
          ></input>
        </form>
      </div>
    </aside>
  );
}

export default RightSidebar;
