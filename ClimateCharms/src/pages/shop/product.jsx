import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Product = (props) => {
    const { id, productName, price, productImage, temp } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[id];

    return (

    <Card style={{ width: '25rem', margin: '2rem'}}>
        <Card.Img variant="top" src={productImage} />
        <Card.Body>
            <Card.Title>{productName}</Card.Title>
            <Card.Text>
                ${price}
                <br></br>
                {temp} °C
            </Card.Text>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </Card.Body>
    </Card>
    /*<div className="product">
            <img src={productImage} />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p> ${price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>/*/
    );
};