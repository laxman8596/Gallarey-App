import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

function Home2() {
	let history = useHistory([]);
	const [imgname, setImgname] = useState('');
	return (
		<div className='bgimage responsive'>
			<div className='brand'>
				<h3>Gallarey App</h3>

				<div>
					<Button style={{ marginRight: '10px' }}>Login</Button>
					<Button>signup</Button>
				</div>
			</div>


			<div style={{ marginTop: '200px' }}>
				<center>
					<h1>Welcome to Gallarey App</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet laoreet mauris,<br />
						sed rhoncus nibh feugiat id. Nam at diam tincidunt, consequat lectus vitae, pulvinar dui.<br />
						Cras tincidunt, orci eu venenatis</p>

					<input type="text" size="80" onChange={(e) => setImgname(e.target.value)} Style={{ padding: '20px', marginBottom: '10px' }} /><br />
					<Button onClick={() => imgname && history.push(`/search1/${imgname}`)}>Search</Button>
				</center>
			</div>
		</div>
	)
}

export default Home2