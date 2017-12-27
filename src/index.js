import React from 'react';
import PropTypes from 'prop-types';

function RichEditor({ className, style }) {
  // remember to use BEM for styles instead of CSS Modules
  const classNames = `my-component ${className}`;
  return (
    <div className={classNames} style={style}>
      RichEditor
    </div>
  );
}

RichEditor.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

RichEditor.defaultProps = {
  className: '',
  style: {},
};

export default RichEditor;

