import React from "react";

const Search = (props) => {
  return (
    <div>
      <ul>
        <li className="list-item">
          <h5>{props.oneRestaurent.name}</h5>
          <img src={props.oneRestaurent.imageUrl} />
        </li>
      </ul>
    </div>
  );
};

export default Search;
