import React from 'react';
import formatDate from './formatDate';
import IconElement from './IconElement';
import PropTypes from 'prop-types';
 

const YourArticle = props => {
    return (       
        <div className="card" style={{ height: 250 }} >
            <div className="row">
                <div className="col-md-5">
                    <img src={props.imgsrc} alt="image 1" className="card-img-top image-fluid" style={{ height: 250 }} />
                </div>
                <div className="card-body col-md-7">
                    <small><IconElement element={props.hasAudioAvailable} iconName="bi-volume-up" text="Audio avaliable" /></small>
                    <small><IconElement element={props.memberPreview} iconName="bi-star float-right" text="" /></small>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text text-secondary">
                        {props.description}
                    </p>
                    <div className="row">
                        <img src={props.image} alt="author photo" className="rounded-circle image-fluid col-3" />
                        <div className="col-7">
                            <span>{props.name}</span>
                            <br/>
                            <small> {formatDate(props.postedDate)} {props.minutesToRead} min read</small>                    
                        </div>
                        <i className="col-2 bi bi-bookmark"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

YourArticle.propTypes = {
    imgsrc: PropTypes.string.isRequired,
    hasAudioAvailable: PropTypes.bool.isRequired,
    memberPreview: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired

};

export default YourArticle;
