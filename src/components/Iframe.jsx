import React from 'react';

const Iframe = (props) => {
  console.log('prop in iframe', props);
  return (
    <div className='iframe-container'>
      <iframe
        title='myIframe'
        src={`http://localhost:3000/d/${props.uid}/kuview-tech-demo?orgId=1&refresh=5s`}
        key='fullDashboard'
      ></iframe>
    </div>
  );
};

export default Iframe;
