import React from 'react';

import './ProductCard.css';


const ProductCard = (props) => {
  return (
    <div className="card">
      <a href={'http://google.com'}>{props.title}</a>
      <img className={props.imageClass} src={props.image} alt={props.imageAlt}/>
    </div>
  )
}

export default ProductCard;