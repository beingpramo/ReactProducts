import React from "react";
import {Products}  from "../data/products_data";

function ProductCard(){
     

return(
<div>
   {
   Products.map((product) => (
       <div className="productCard">
        <img src={product.thumbnail} alt={product.name} className="productImg" height={300} width={300}/>
        <h3>{product.title}</h3>
        <p>Price: {product.price}$</p>
        <p>Rating: {product.rating}</p>
        <p>Brand: {product.brand}</p>
       </div>
   )
   )
   }
</div>

    );
}

export default ProductCard;