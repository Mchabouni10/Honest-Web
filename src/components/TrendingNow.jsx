import React from "react";
import { Link } from "react-router-dom";

function TrendingNow() {
  const trendnow = [
    {
      tag: "NEW PRINTS",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw23f841e3/images/large/Honest-Diaper/ECF_Classic_2023/polybags/PatternPlay_Polybag1.jpg?sw=2000&sh=2000&sm=fit",
      name: "HONEST DIAPERS",
      comment: "Safe, Sustainable AND Adorable",
      price: "$12.99",
    },

    {
      tag: "BEST SELLER",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw75a9f367/images/large/Clean-Conscious-Wipes/Balance-Blues/60ct_BalancedBlues_baby_changing_table-min.jpg?sw=2000&sh=2000&sm=fit",
      name: "CLEAN CONSCIOUS™ WIPES",
      comment: "Plant-based baby wipes, now compostable!",
      price: "$0.99 - $49.99",
    },

    {
      tag: "NEW ARRIVAL",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw59e2134e/images/large/Healing-Head-To-Toe-Ointment/H0864HEL0000S_HealingOintment_5oz_FF_Product_XX_0374_04.jpg?sw=2000&sh=2000&sm=fit",
      name: "HEALING HEAD-TO-TOE OINTMENT",
      comment: "",
      price: "$14.99",
    },

    {
      tag: "NEW ARRIVAL",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw21e62950/images/large/Hydrogel-Cream/Hydrogel-2023-Refresh/hydrogel_gif.gif?sw=1000&sh=1000&sm=fit",
      name: "HYDROGEL CREAM",
      comment: "Hydrate skin for an all-day dewy glow",
      price: "$21.99",
    },
  ];

  return (
    <>
      <div className="holidaygifts-container">
        <div className="holidaygifts">
          <h1>Trending Now</h1>
          <h3>Shop Our Honest Faves!</h3>
        </div>
        <button className="holidaygiftsbutton">SHOP NOW</button>
      </div>

      <div>
        <ul className="gift-list">
          {trendnow.map((trend, index) => (
            <li key={index}>
              {trend.tag && <p className="gifttag">{trend.tag}</p>}
              <img src={trend.image} alt={trend.name} />
              <h3>{trend.name}</h3>
              <p>{trend.comment}</p>
              <p>
                <strong>{trend.price}</strong>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TrendingNow;
