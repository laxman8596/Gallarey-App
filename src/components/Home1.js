// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';

// import { useHistory } from 'react-router-dom';



// function Home1() {
// 	let history = useHistory();
// 	const [imgname, setImgname] = useState('');

// 	return (
// 		<div className='bgimage responsive'>
// 			<div className='brand'>
// 				<h2> Gallarey App</h2>
// 				<div>
// 					<Button class="btn btn-dark" style={{ marginRight: '10px', width: '90px' }}>Login</Button>
// 					<Button class="btn btn-dark" style={{ marginRight: '5px', width: '90px' }}>signup</Button>
// 				</div>
// 			</div>


// 			<div style={{ marginTop: '250px' }}>
// 				<center>
// 					<h1 style={{ color: 'white', marginBottom: '5px' }}> Welcome to Gallarey App</h1>

// 					<p style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet laoreet mauris,<br />
// 						sed rhoncus nibh feugiat id. Nam at diam tincidunt, consequat lectus vitae, pulvinar dui. Cras
// 						tincidunt, orci eu venenatis</p>

// 					<input type="text" size="80" onChange={(e) => setImgname(e.target.value)} style={{ padding: '10px', borderRadius: '15px', marginBottom: '15px' }} /><br />
// 					<Button onClick={() => imgname && history.push(`/searche/${imgname}`)}>search</Button>
// 				</center>
// 			</div>
// 		</div >
// 	)
// }

// export default Home1