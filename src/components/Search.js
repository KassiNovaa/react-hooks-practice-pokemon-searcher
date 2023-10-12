import React from "react";

function Search({onSearch}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" 
        onChange={(e) => onSearch(e.target.value)}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
