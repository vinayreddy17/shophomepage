// import React from 'react'
// import '../styles/card.css'

// export default function Card({key, name, price, sale, inCart, addToCart, removeFromCart}) {
//     return (
//         <div className="card">
//             <div className="imgbox">Product Image</div>
//             <span>{name}</span>
//             <span>{price}</span>
//             <span>{sale}</span>
//             {!inCart && <button onClick={addToCart}>Add to cart</button>}
//             {inCart && <button onClick={removeFromCart}>Remove from cart</button>}
//         </div>
//     )
// }

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRate from './starRate.js';

export default function CardComponent({ key, name, price, sale, inCart, addToCart, removeFromCart }) {
  return (
    <Card style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
      
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <StarRate />
        <Card.Text>
          Price: {price}<br />
          Sale: {sale}
        </Card.Text>
        {!inCart && <Button variant="primary" onClick={addToCart}>Add to Cart</Button>}
        {inCart && <Button variant="danger" onClick={removeFromCart}>Remove from Cart</Button>}
      </Card.Body>
    </Card>
  );
}
