import React from 'react';
import formatDate from './formatDate';
import IconElement from './IconElement';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';


const missedArticle = props => {
    return (
        <Card style={{ height: 400 }}>
            <Card.Img src={props.imgsrc} alt="image 1" style={{ height: 200 }} />
            <Card.Body className="d-flex flex-column">
                <Row>
                    <Col xs={12}>
                        <small>
                            <IconElement element={props.memberPreview} iconName="bi-star" text="Member preview" />
                        </small>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text text-secondary">
                            {props.description}
                        </p>
                    </Col>
                </Row>
                <Row className="mt-auto">
                    <Col xs={3}>
                        <img src={props.image} alt="" className="rounded-circle image-fluid col-3" style={{ width: '50px' }} />
                    </Col>
                    <Col xs={7}>
                        <p>{props.name}</p>
                        <small> {formatDate(props.postedDate)} {props.minutesToRead} min read</small>
                    </Col>
                    <Col xs={2}>
                        <i className="bi bi-bookmark"></i>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

missedArticle.propTypes = {
    imgsrc: PropTypes.string.isRequired,
    memberPreview: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired
};

export default missedArticle;
