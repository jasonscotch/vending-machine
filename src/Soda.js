import React from "react";
import { Link } from "react-router-dom";

function Soda() {
  return (
    <div>
      <h1>HAVE A COKE</h1>
      <img
        src="https://gifdb.com/images/high/man-holding-bursting-coke-lf8kfq1c6h7qrttc.gif"
        alt="exploding coke"
      />
      <h1><Link to="/">Go Back</Link></h1>
    </div>
  );
}

export default Soda;