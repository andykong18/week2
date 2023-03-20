import React from 'react';
import formatDate from './formatDate';
import IconElement from './IconElement';
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const forYouArticle = props => {
    return (
        <Card style={{ height: 250 }}>
            <Row>
                <Col md={5}>
                    <Image src={props.imgsrc} alt="image 1" fluid style={{ height: 250 }} />
                </Col>
                <Col md={7}>
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                            <small><IconElement element={props.hasAudioAvailable} iconName="bi-volume-up" text="Audio available" /></small>
                            <small><IconElement element={props.memberPreview} iconName="bi-star" text="" /></small>
                        </div>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text className="text-secondary">{props.description}</Card.Text>
                        <div className="d-flex align-items-center">
                            <Image src={props.image} alt="author photo" roundedCircle fluid className="me-3" style={{ width: '50px' }} />
                            <div>
                                <span>{props.name}</span>
                                <br />
                                <small>{formatDate(props.postedDate)} {props.minutesToRead} min read</small>
                            </div>
                            <i className="bi bi-bookmark ms-auto"></i>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

forYouArticle.propTypes = {
    imgsrc: PropTypes.string.isRequired,
    hasAudioAvailable: PropTypes.bool.isRequired,
    memberPreview: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired
}

export default forYouArticle;
