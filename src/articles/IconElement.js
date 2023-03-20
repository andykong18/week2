import React from 'react';
import PropTypes from 'prop-types';

const IconElement = ({ element, iconName, text }) => {
    return (
        <i className={`bi ${iconName} ${element ? "d-inline" : "d-none"}`}>
            {text}
        </i>
    )
}

IconElement.propTypes = {
    element: PropTypes.bool.isRequired,
    iconName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default IconElement
