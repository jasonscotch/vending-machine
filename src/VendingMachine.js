import React from "react";
import { Link } from "react-router-dom";

import'./VendingMachine.css';

const VendingMachine = () => {
  return (
    <div>
      <h1>VENDING MACHINE</h1>
        <div className="VendingMachine">
          <div className="VendingMachine-image">
            <img
              src="https://piranhavending.com/wp-content/uploads/2017/08/Piranha-G432-snack-vending-machine-R.jpg"
              alt="vending machine"
            />
          </div>
          <div className="VendingMachine-links">
            <h1><Link to="/soda">Soda</Link></h1>
            <h1><Link to="/chips">Chips</Link></h1>
            <h1><Link to="/candy">Candy</Link></h1>
          </div>
        </div>
    </div>
  );
};

export default VendingMachine;
