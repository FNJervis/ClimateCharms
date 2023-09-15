import Card from 'react-bootstrap/Card';

export const AProduct = (props) => {
    const { id, productName, price, productImage, temp, time } = props.data;
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
        </Card.Body>
    </Card>
    );
};