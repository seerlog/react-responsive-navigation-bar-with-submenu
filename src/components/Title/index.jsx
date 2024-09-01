import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

export const Title = ({ primary, color, size, text, ...props }) => {
    const mode = primary ? 'title--primary' : 'title--secondary';
    return (
      <h3
        className={['title', `title--${size}`, mode].join(' ')}
        style={{color: color}}
        {...props}
      >
        {text}
      </h3>
    );
  };

  Title.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What text color to use
     */
    color: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    text: PropTypes.string.isRequired,
  };
  
  Title.defaultProps = {
    color: "#333333",
    primary: false,
    size: 'medium',
  };