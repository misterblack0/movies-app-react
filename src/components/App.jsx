import React from "react";
import SearchMovies from "./SearchMovies";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const App = () => (
  <div className="wrapper">
    <LeftSidebar />
    <SearchMovies />
    <RightSidebar />
  </div>
);

export default App;
