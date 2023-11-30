import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Holidaygifts() {
  const Holidaygift = [
    {
      tag: "BEST SELLER",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwef385d1d/images/large/Baby-Arrival-Gift-Set/2023-restage/H02BAG16DTV3S_BabyArrivalGiftSet_XX_XX_PDP_XX_0037_PrdctPkg_1x1-min.jpg?sw=2000&sh=2000&sm=fit",
      name: "BABY ARRIVAL GIFT SET",
      comment: "Essential must-haves for Baby Mom",
      price: "$49.99",
    },

    {
      tag: "BEST SELLER",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwdc65ed83/images/large/Diaper-Cake/DiaperCakes22Update/MiniDiaperCake_All_0009_DTC.jpg?sw=400&sh=400&sm=fit",
      name: "DIAPER CAKE",
      comment: "the perfct piece and decoration gift",
      price: "$49.99 - $99.99",
    },

    {
      tag: "",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwbb5dfd37/images/large/Never-Basic-Kit/white/NeverBasicSkincareSet_front.jpg?sw=400&sh=400&sm=fit",
      name: "NEVER BASIC KIT",
      comment: "",
      price: "$19.99",
    },

    {
      tag: "",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwa3bcf0f4/images/large/Holiday2022/new-beauty-skincare-kits/HydratedHolidaySkinCareDuo_boxonholidaycanvas.jpg?sw=2000&sh=2000&sm=fit",
      name: "HYDRATED HOLIDAY SINKCARE DUO",
      comment: "",
      price: "$24.99",
    },
  ];

  return (
    <>
      <div className="holidaygifts-container">
        <div className="holidaygifts">
          <h1>holiday Gifts</h1>
          <h3>Baby, Beauty, + More!</h3>
        </div>
        <button className="holidaygiftsbutton">SHOP NOW</button>
      </div>

      <div>
        <ul className="gift-list">
          {Holidaygift.map((gift, index) => (
            <li key={index}>
              <p className="gifttag">{gift.tag}</p>
              <img src={gift.image} alt={gift.name} />
              <h3>{gift.name}</h3>
              <p>{gift.comment}</p>
              <p><strong>{gift.price}</strong></p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img className='HolidayGiftImage' src="/Holidaygift.png"/>
        
      </div>
    </>
  );
}
