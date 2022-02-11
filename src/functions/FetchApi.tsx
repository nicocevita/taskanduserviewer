// import axios from 'axios';
// import {useEffect, useState} from 'react';
// import {UserResponse} from '../types/Types';

// const FetchApi = (path: string) => {
// 	const [userResponse, setUserResponse] = useState<UserResponse[]>();
// 	useEffect(() => {
// 		const apiResponse = async () => {
// 			const res = await axios.get(`https://shielded-meadow-39651.herokuapp.com/api${path}`);
//             setUserResponse(res.data)
// 		};
//         apiResponse();
// 	}, []);
//     return userResponse;
// };

// export default FetchApi;
