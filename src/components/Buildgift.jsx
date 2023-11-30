import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


function Buildgift() {
  return (
    <div className="Buildgift">
      <section className="buildgifttext">
        <h1>
          BUILD YOUR<br></br>OWN GIFT
        </h1>

        <h2>
          Create your own holiday magic,<br></br>one item at a time!
        </h2>
      </section>
      <button className="getstartedbutton">GET STARTED</button>
      <button className="shopallgiftsbutton">SHOP ALL GIFTS</button>
    </div>
  );
}

export default Buildgift;
