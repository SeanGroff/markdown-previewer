import React from 'react'

export default (props) => {
  return (
    <div className='col-sm-6'>
      <span
        dangerouslySetInnerHTML={props.markdown() }
        style={{color: '#68EFAD'}}
        />
    </div>
  );
}