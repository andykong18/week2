import React from 'react';
import formatDate from './formatDate';
import IconElement from './IconElement';
import PropTypes from 'prop-types';


const MissedArticle = props => {
    return (
        <div className="card" style={{ height: 400 }} >
            <div>
                <img src={props.imgsrc} alt="image 1" className="card-img-top image-fluid" style={{ height: 200 }} />
            </div>
            <div>
                <small><IconElement element={props.memberPreview} iconName="bi-star" text="Member preview" /></small>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text text-secondary">
                    {props.description}
                </p>
                <div className="row">
                    <img src={props.image} alt="author photo" className="rounded-circle image-fluid col-3" />
                    <div className="col-7 ">
                        <p>{props.name}</p>
                        <small> {formatDate(props.postedDate)} {props.minutesToRead} min read</small>                    
                    </div>
                    <i className="col-2 bi bi-bookmark"></i>
                </div>
            </div>
        </div>
    );
};

MissedArticle.propTypes = {
    imgsrc: PropTypes.string.isRequired,
    memberPreview: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired
};

export default MissedArticle;
