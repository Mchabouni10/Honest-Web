import React from "react";
import App from "../App";

function Allwipes() {
  const wipes = [
    {
      id: 1,
      tag : 'BEST SELLER',
      name: "Clean Conscious™ Wipes",
      price: "$0.99 - $44.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwb5fd9658/images/large/Dry-Wipes/restage-2023/H0012W48V200S_DryWipes_wipefan.jpg?sw=2000&sh=2000&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw0c170ea1/images/large/Clean-Conscious-Wipes/Group-60-Count/MultiSKU_CCWipes_60ct_Group_On_Canvas.jpg?sw=2000&sh=2000&sm=fit',
      image2: './images/image1.png',
      comment:'8 prints'
    },

    {
      id: 2,
      tag : 'NEW ARRIVAL',
      name: "Flushable Wipes",
      price: "$3.99 - $25.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw0c170ea1/images/large/Clean-Conscious-Wipes/Group-60-Count/MultiSKU_CCWipes_60ct_Group_On_Canvas.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw75a9f367/images/large/Clean-Conscious-Wipes/Balance-Blues/60ct_BalancedBlues_baby_changing_table-min.jpg?sw=2000&sh=2000&sm=fit',
      image2: 'images/image2.png',
      comment:'3 pack options'
    },

    {
      id: 3,
      tag : 'NEW ARRIVAL',
      name: "Everyday Pack of Wipes",
      price: "$14.49",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwb3acd331/images/large/Flushable-Wipes/lifestyle/FlushableWipes_lifestyle4.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw68cc35ad/images/large/Flushable-Wipes/lifestyle/FlushableWipes_lifestyle3.jpg?sw=2000&sh=2000&sm=fit',
        image2: './.images/image3'
    },

    {
      id: 4,
      tag : '',
      name: "Calm, Hydrate and Nourish Scented",
      price: "$5.99 - $44.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwdd61dd03/images/large/Everyday-Pack-of-Wipes/EverydayPackOfWipes_white.jpg?sw=400&sh=400&sm=fit",
        image1 : 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwd6083f90/images/large/Flushable-Wipes/lifestyle/Flushable%20Wipes_wipes_benefit_graphic.jpg?sw=2000&sh=2000&sm=fit',
        image2: '',
        comment:'4 scents'
    },

    {
      id: 5,
      tag: '',
      name: "Honest Dry Wipes",
      price: "$4.99 - $19.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw63b0915d/images/large/Dry-Wipes/restage-2023/DryWipes_192.jpeg?sw=400&sh=400&sm=fit",
        image1 : 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw0c170ea1/images/large/Clean-Conscious-Wipes/Group-60-Count/MultiSKU_CCWipes_60ct_Group_On_Canvas.jpg?sw=400&sh=400&sm=fit',
        image2:'',
        comment:'4 scents'
    },
    {
      id: 6,
      tag: 'MULTI-PACKS AVAILABLE',
      name: "Sanitizing Alcohol Wipes",
      price: "$2.89 - $51.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw31076f41/images/large/all-wipes-evergreen-campaign/sanitizing/SANITIZING_STACK.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw5b1805a6/images/large/all-wipes-evergreen-campaign/benefit/NOURISH_HYDRATE_INGREDIENT_0003.jpg?sw=2000&sh=2000&sm=fit',
        image2: '',
        comment:'2 pack options'
    },
    {
      id: 7,
      tag: '',
      name: "Makeup Remover Facial Wipes",
      price: "$7.99 - $19.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwf1126793/images/large/Makeup-Remover-Wipes/restage-2022/B10MRWV2NO30S_MakeupRemoverFacialWipes_30ct_front_canvas.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw567f529c/images/large/Benefit-Wipes/Calm/Calm_lifestyle.jpg?sw=2000&sh=2000&sm=fit',
        image2: '',
        comment:'4 scents'
    },
  ];

  return (
    <div className="allWipepage">
      <h2>ALL WIPES</h2>
      <ul>
        {wipes.map((wipe) => (
          <li key={wipe.id}>
            <p className="wipeTag">{wipe.tag}</p>
            <div className="imageContainer">
              {wipe.image && (
                <img className="wipeImage" src={wipe.image} alt={wipe.name} />
              )}
              {wipe.image1 && (
                <img className="wipeImage hoverImage" src={wipe.image1} alt={wipe.name} />
              )}
            </div>
            <p>{wipe.name}</p>
            <p className="wipePrice">Price: {wipe.price}</p>
            {wipe.image2 && <img src='../src/components/images/image2' />}
            <p className="wipeComment">{wipe.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Allwipes;
