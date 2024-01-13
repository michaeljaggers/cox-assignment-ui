import React from "react";
import Card from 'react-bootstrap/Card';

interface CardProps {
    heading: string;
    subheading: string;
    price: number;
};

const CustomCard = ({
    heading,
    subheading,
    price
}: CardProps) => {

    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>{heading}</Card.Title>
                <Card.Text>
                    {subheading}
                </Card.Text>
                <Card.Link href="#">{price}</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default CustomCard;
