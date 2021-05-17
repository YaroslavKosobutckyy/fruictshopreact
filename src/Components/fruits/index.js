import React, { useState } from 'react';

function  Fruits ( {addToCart } ) {
     
     const [products] = useState([
          {
            name: 'Banana',
            cost: 5,
            image: 'http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg'
          },
          {
            name: 'Lemon',
            cost: 15,
            image: 'https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon-250x250.jpg'
          },
          {
               name: 'Orange',
               cost: 10,
               image: 'http://www.azspagirls.com/files/2010/09/orange.jpg'
          }
        ]);
  
return (
<>
  <div className='fruits'>
          <h2>Fruits</h2>
     {products.map((product, index) => (
     <div className="fruits-item">
		<img src={product.image} alt={product.name}/>
			<h3>{product.name}</h3>
			<p>Price: &#36;{product.cost}</p>
	<button class="fruits-item-button" onClick={(() => addToCart(product))}>Add to card</button>
	</div>
     ))}
 </div>
</>   
)
}

export default Fruits;