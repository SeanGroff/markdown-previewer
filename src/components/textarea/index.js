import React from 'react';
import './textarea.scss';

export default (props) => {
  return (
    <div className='col-sm-6 textarea-wrapper'>
      <textarea
        className='form-control'
        onChange={props.onTextChange}
        value={props.value}>
      </textarea>
    </div>
  );
}