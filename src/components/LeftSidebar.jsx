import React from "react";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TheatersIcon from "@material-ui/icons/Theaters";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

function LeftSidebar() {
  return (
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
  );
}

export default LeftSidebar;
