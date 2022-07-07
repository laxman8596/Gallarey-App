import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search({ match }) {
	const [data, setData] = useState([])
	useEffect(() => {
		axios.get(`https://pixabay.com/api/?key=25850788-198f1932e82eefef8db8d5b36&q=${match.params.imgname}&image_type=photo`).then(
			res => setData(res.data.hits)
		)
	}, [])
	return (
		<section style={{}}>

			<div className='row' style={{ margin: '0 10px' }}>
				{
					data && data.map(imgobj =>
						<div className='col-md-4 my-4' >
							<div className='card' style={{ borderRadius: '10px' }}>
								<img className='card-img-top' src={imgobj.largeImageURL} height="250" width="250" style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} />
								<div className='card-body' style={{ backgroundColor: '#F0EBE3', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }} >
									<h5 className='card-title text-center' >{imgobj.tags}</h5>

								</div>
							</div>
						</div>
					)
				}
			</div>
		</section>



	)
}

export default Search