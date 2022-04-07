// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function Searche({ match }) {
// 	const [data, setData] = useState([])
// 	useEffect(() => {
// 		axios.get(`https://pixabay.com/api/?key=25850788-198f1932e82eefef8db8d5b36&q=${match.params.imgname}&image_type=photo`).then(
// 			res => setData(res.data.hits)
// 		)
// 	}, [])
// 	return (
// 		<div className='search'>
// 			<div className='row'>

// 				{data &&
// 					data.map(imgobj =>
// 						<div className='col-md-4'>
// 							<div className='card'>
// 								<img className='card-img-top' src={imgobj.largeImageURL} height="250" width="260" />
// 								<div className='card-body'>
// 									<h5 className='card-title text-center' >{imgobj.tags}</h5>

// 								</div>
// 							</div>
// 						</div>
// 					)}


// 			</div>
// 		</div>
// 	)
// }

// export default Searche