import React from 'react';


const IndexPage = () => {

	return (
		<div className='App'>
		  <header className='App-header'>
		    <div style={{ width: '460px', margin: 'auto' }}>

		      <img src={process.env.PUBLIC_URL + '/fh_logo.svg'} alt='logo' />
		    </div>
		  </header>
		</div>
	)
}

export default IndexPage;
