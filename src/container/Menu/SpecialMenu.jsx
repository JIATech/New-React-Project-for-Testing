import React from 'react';

import './SpecialMenu.css';
import { images,data } from '../../constants';
import { MenuItem, SubHeading } from '../../components';
const SpecialMenu = () =>{
return  (
  <>
  <div className='app__specialMenu flex__center section__padding'>
   <div className="app__specialMenu-title">

   <SubHeading title={'Menu that fits you palatte'} />
   <h1 className="headtext__cormorant">Today's Special</h1>
   </div>
   <div className="app__specialMenu-menu">
    <div className="app__specialMenu-menu_wine flex__center">
      <p className='app__specialMenu-menu_heading'>Wine and Beer</p>
      <div className="app__specialMenu-menu_items">
             {data.wines.map((wine,index) => {
              return <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} /> 
             })}
      </div>
    </div>
    <div className="app__specialMenu-menu_img">
      <img src={images.menu} alt="menu img" />
    </div>
    <div className="app__specialMenu-menu_cocktails flex__center">
      <p className='app__specialMenu-menu_heading'>Cocktails</p>
      <div className="app__specialMenu-menu_items">
             {data.cocktails.map((cocktail,index) => {
          
            return <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} /> 
             })}
      </div>
    </div>




   </div>
<button style={{marginTop:'15px'}} className="custom__button" type='button'>
  View More
</button>
  
  </div>
  </>
);
            }

export default SpecialMenu;
