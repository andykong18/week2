import React, { Component } from 'react';
import PropTypes from 'prop-types';
import formatDate from './formatDate';
import IconElement from './IconElement';


class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            author: PropTypes.shape({
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                isMediumMember: PropTypes.bool.isRequired
            }).isRequired,
            description: PropTypes.string.isRequired,
            hasAudioAvailable: PropTypes.bool.isRequired,
            image: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            // Whether an article is behind a paywall
            memberPreview: PropTypes.bool.isRequired,
            minutesToRead: PropTypes.number.isRequired,
            postedDate: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    }

    render() {
        const { image, title, description, hasAudioAvailable, author, memberPreview, minutesToRead, postedDate } = this.props.article;
        return (
            <div className="card" style={{ height: 400 }} >
                <img src={image} alt="image 1" className="card-img-top image-fluid" style={{ height: 200 }} />
                    {memberPreview && (
                    <small>
                    <i className="bi bi-volume-up"> Member preview </i>
                    </small>
                    )}
                    {hasAudioAvailable && (
                    <small>
                    <i className="bi bi-volume-up"> Audio Available </i>
                    </small>
                    )}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-secondary">{description}</p>
                    <div className="row">
                        <img src={author.image} alt="author photo" className="rounded-circle image-fluid col-3" />
                        <div className="col-7 ">
                            <p>{author.name}</p>
                            <small> {formatDate(postedDate)} {minutesToRead} min read</small>
                        </div>
                        <i className="col-2 bi bi-bookmark"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article;
