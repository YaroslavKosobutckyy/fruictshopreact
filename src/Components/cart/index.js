import React from 'react';

export default function Cart ( { cart, removeFromCart } ) {
     
return (
     <>
      <div className="fruits">
        {cart.map((product, index) => (
          <div className="fruits-item" key={index}>
                <h3>{product.name}</h3>
                <h4>{product.cost}</h4>
                <img src={product.image} alt={product.name} />
                <button onClick={() => removeFromCart(product)}>Remove </button>
         
          </div>
        ))}
    </div>
  </>
); 
}
