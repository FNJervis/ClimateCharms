import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Product = (props) => {
    const { id, productName, price, productImage, temp, time } = props.data;
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
                <br></br>
                Hora: {time}
            </Card.Text>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </Card.Body>
    </Card>
    );
};