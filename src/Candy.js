import React from "react";
import { Link } from "react-router-dom";

function Candy() {
  return (
    <div>
      <h1>SUGAR RUSH!!!</h1>
      <img
        src="https://webappstatic.buzzfeed.com/static/2016-09/9/14/asset/buzzfeed-prod-fastlane01/anigif_sub-buzz-5867-1473447033-11.gif"
        alt="sugar rush kid"
      />
      <h1><Link to="/">Go Back</Link></h1>
    </div>
  );
}

export default Candy;

