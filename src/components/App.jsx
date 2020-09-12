import React from "react";
import SearchMovies from "./SearchMovies";
import User from "./User";
import users from "../users-data";

import DoneAllIcon from "@material-ui/icons/DoneAll";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TheatersIcon from "@material-ui/icons/Theaters";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import SearchIcon from "@material-ui/icons/Search";

function App() {
  return (
    <div className="wrapper">
      <aside className="sidebar__left">
        <div className="logo">
          <a href="https://google.ro">
            <h1>Movies Box</h1>
          </a>
        </div>

        <div className="sidebar__left--main">
          <h2>Main</h2>
          <div>
            <a href="https://google.ro" className="sidebar__link">
              <VideoLibraryIcon fontSize="large" />
              <li>Genres</li>
            </a>

            <a href="https://google.ro" className="sidebar__link">
              <DoneAllIcon fontSize="large" />
              <li>Recommended</li>
            </a>

            <a href="https://google.ro" className="sidebar__link">
              <TrendingUpIcon fontSize="large" />
              <li>Trending</li>
            </a>

            <a href="https://google.ro" className="sidebar__link">
              <TheatersIcon fontSize="large" />
              <li>New Releases</li>
            </a>
          </div>
        </div>

        <div className="sidebar__left--user">
          <h2>User</h2>

          <div>
            <a href="https://google.ro" className="sidebar__link">
              <FavoriteBorderIcon fontSize="large" />
              <li>Favorites</li>
            </a>

            <a href="https://google.ro" className="sidebar__link">
              <QueryBuilderIcon fontSize="large" />
              <li>Watch Later</li>
            </a>
          </div>
        </div>
      </aside>
      <main className="main">
        <SearchMovies />
      </main>
      <aside className="sidebar__right">
        <div className="sidebar__right--header">
          <NotificationsIcon fontSize="large" />
          <ChatBubbleIcon fontSize="large" />
          <img src="/img/profile_user.jpg" alt="user"></img>
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
    </div>
  );
}

export default App;
