import React from "react";
import SearchMovies from "./SearchMovies";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";


function App() {
  return (
    <div className="wrapper">
      <LeftSidebar />
      <SearchMovies />
      <RightSidebar />
      
    </div>
  );
}

export default App;
