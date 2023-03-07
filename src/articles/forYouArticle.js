import React from 'react';
import PropTypes from 'prop-types'

const forYouArticle = props => {
    return (
        <div className="card" style={{ height: 250 }}>
            <p>{props.description}</p> 
        </div>
    );
}

forYouArticle.propTypes = {
    description: PropTypes.string.isRequired
}

export default forYouArticle;
