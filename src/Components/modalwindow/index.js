import React from 'react';
import {Modal, Button, Form,   Nav, Navbar, Container, Card} from 'react-bootstrap';
// import { propTypes } from 'react-bootstrap/esm/Image';
import { useState } from 'react';
import Fruits from '../fruits';
import Cart from '../cart';

const PAGE_PRODUCTS = 'products';


let allBananas = [];
let allLemons = [];
let allOranges = [];
let suma = 0;

function Modalwindow (props) {
 
	const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, {...product}]);
        }; 
        allBananas = cart.filter((product)=> product.name === 'Banana');
        console.log({allBananas});
        allLemons = cart.filter((product)=> product.name === 'Lemon');
        console.log({allLemons});
        allOranges = cart.filter((product)=> product.name === 'Orange');
        console.log({allOranges});

        suma = (allBananas.length * 5) + (allLemons.length * 15) + (allOranges.length * 10);

        console.log({suma});
     
     const removeFromCart = (productToRemove) => {
           setCart(
           cart.filter((product)=> product !== productToRemove))
        };
     const removeAllFromCart = () => {
         setCart([]);
        };
     
     console.log({cart});
    
     

return (
<> 
	<div className='header'>
            <h1>Food Shop</h1>
             	<button className="header-button" data-toggle="modal" data-target="#cart" id='show-card' onClick={handleShow}>
             	Card <i className="fas fa-shopping-basket mb-20"></i>(<span id='total-count'> {cart.length}</span>)
             	</button>
             		<br/> <br/>
             <button 
                 className="header-button" 
                 id="clear-card" 
                 onClick={() => removeAllFromCart()}
                >
                     Clear cart
             </button>      
    </div>


{/* modal window */}	  
		   <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                   <Modal.Title>Cart</Modal.Title>
               </Modal.Header>
              <Modal.Body>
              <table>
                        <td>
                            <tr>Bananas</tr>
                            <tr>Oranges</tr>
                            <tr>Lemons</tr>
                        </td>
                        <td>
                            <tr> price: 5$</tr>
                            <tr> price: 10$</tr>
                            <tr> price: 15$</tr>
                        </td>
                        <td>
                            <tr>quantity of goods:{allBananas.length} </tr>
                            <tr>quantity of goods:{allOranges.length}</tr>
                            <tr>quantity of goods:{allLemons.length}</tr>
                        </td>
                        <td>
                            <tr>     = $ {allBananas.length * 5}</tr>
                            <tr>     = $ {allOranges.length * 10}</tr>
                            <tr>     = $ {allLemons.length * 15}</tr>
                        </td>
                        </table>
                  <p>Total price: ${suma}</p>
                        <div>
                            <Cart cart={cart} removeFromCart={removeFromCart} />
                        </div>     
               </Modal.Body>
			   <Modal.Footer>
			<Button variant="secondary" onClick={handleClose}>Close</Button>
			<Button variant="primary">Order now</Button>
		</Modal.Footer>
           </Modal>

{/* < Fruits /> */}

<div className='fruits'>
     <Fruits addToCart = {addToCart} />
     </div>
     
</>

)

}


export default Modalwindow;



