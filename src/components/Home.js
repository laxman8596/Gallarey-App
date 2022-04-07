import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
const Home = () => {

	let history = useHistory();
	const [imgname, setImgname] = useState('');

	return (
		<div className='bgimage responsive'>
			<div className="brand">
				<h3 style={{ color: 'white' }}>

					Gallarey App

				</h3>
				<div style={{ textAlign: 'center', }}>
					<Button variant="success" style={{ marginRight: '10px' }}> Login</Button>
					<Button variant="success"> signup</Button>
				</div>

			</div>

			<div className='center responsive'>
				<center >
					<h1 style={{ Color: 'white' }}>Stunning free images & royalty free stock</h1>
					<h6 style={{ Color: 'white' }}>Over 2.5 million+ high quality stock images, videos and music shared by our talented community.</h6><br />


					<input type='text' placeholder='search any images ' size='' onChange={(e) => setImgname(e.target.value)} style={{ marginBottom: "10px", padding: '10px', borderRadius: '10px' }} /><br />
					<Button type="button" class="btn btn-success btn-lg" onClick={() => imgname && history.push(`/search/${imgname}`)} variant="success" style={{}}>Search</Button>
				</center>
			</div>
		</div>
	)
}

export default Home