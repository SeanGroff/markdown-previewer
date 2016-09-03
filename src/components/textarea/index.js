import React from 'react';

export default (props) => {
  return (
    <textarea
      onChange={props.onTextChange}
      value={props.value}>
    </textarea>
  );
}