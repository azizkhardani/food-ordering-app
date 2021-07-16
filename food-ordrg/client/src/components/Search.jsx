import React from "react";

const Search = (props) => {
  return (
    <div>
      {console.log(props.oneRestaurent[0])}
     <h5>{props.oneRestaurent[0].name}</h5>
     <img src={props.oneRestaurent[0].imageUrl} />
    </div>
  );
};

export default Search;
