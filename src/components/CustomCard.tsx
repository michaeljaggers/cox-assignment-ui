import React from "react";
import Card from 'react-bootstrap/Card';

interface CardProps {
    heading: string;
    subheading: string;
    background: string;
    image: string;
    price: number;
};

const CustomCard = ({
    heading,
    subheading,
    background,
    image,
    price
}: CardProps) => {

    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>{heading}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{subheading}</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">{price}</Card.Link>
                
            </Card.Body>
        </Card>
    );
};

export default CustomCard;
