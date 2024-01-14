import Card from 'react-bootstrap/Card';
import bridge from '../assets/wide_ggbridge_bg_teneax.jpg';
import placeholder from '../assets/placeholder.png';
import background from '../assets/darktiles_bg_gike55.jpg';

interface CardProps {
    heading: string;
    subheading: string;
    price: string | number;
    showBridge?: boolean;
};

const CustomCard = ({
    heading,
    subheading,
    price,
    showBridge,
}: CardProps) => {

    return (
        <Card>
            <header
                className={"card-header d-flex align-items-center justify-content-center " + (showBridge ? "bridge" : "placeholder")}
                style={{ backgroundImage: showBridge ? `url("${bridge}")` : `url("${background}")` }}
            >
                { !showBridge &&
                    <img
                        alt="header"
                        className={'placeholder'}
                        src={placeholder}
                    />
                }
            </header>
            <Card.Body>
                <Card.Title>{heading}</Card.Title>
                <Card.Text>
                    {subheading}
                </Card.Text>
                <div className="card-price d-flex align-items-end justify-content-end" >
                    <span>
                        {price}
                    </span>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CustomCard;
