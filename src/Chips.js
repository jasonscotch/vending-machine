import React from "react";
import { Link } from "react-router-dom";

function Chips() {
  return (
    <div>
      <h1>HMMMM CRUNCHY CHIPS!</h1>
      <img
        src="https://i.makeagif.com/media/2-07-2018/-MCzIj.gif"
        alt="crunchy chips"
      />
      <h1><Link to="/">Go Back</Link></h1>
    </div>
  );
}

export default Chips;