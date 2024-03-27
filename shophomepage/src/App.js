import {React, useState} from 'react'
import Card from './components/card'
import data from './data'
import './styles/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/navbar';


export default function App() {
    let [numItems, setNumItems] = useState(0)
    let [products, setProducts] = useState(data)
    

    function addToCart(index) {
        setProducts(products.map((product, idx) => ({
            ...product,
            inCart: idx === index ? true : product.inCart
        })))
        setNumItems(numItems + 1)
    }

    function removeFromCart(index) {
        setProducts(products.map((product, idx) => ({
            ...product,
            inCart: idx === index ? false : product.inCart
        })))
        setNumItems(numItems - 1)
    }
    return (
        <div className="app">
         
          <BasicExample   numItems={numItems}/>
           
            <div className="hero">Shop Here</div>
            <div className="products">
                <div className="container products-container">
                {/* { productCards } */}
            {    products.map((product, index) => (
        <Card
            {...product}
            key={index}
            addToCart={() => addToCart(index)}
            removeFromCart={() => removeFromCart(index)}
        />
    ))}
                </div>
            </div>
        </div>
    )
}