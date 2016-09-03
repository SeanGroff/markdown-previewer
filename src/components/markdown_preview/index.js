import React from 'react'

export default (props) => {
  return (
    <span
      dangerouslySetInnerHTML={props.markdown()} />
  );
}