import {useEffect, useState} from 'react';
import {User} from '../user/User';
import {Pagination} from '../layaout/Pagination';
import {UserSelected, DataUserResponse, UserResponse} from '../../types/Types';
import axios from 'axios';
import IdRandom from '../../functions/IdRandom';

export const Users = () => {
	const [userModal, setUserModal] = useState<boolean>(false);
	const [userSelected, setUserSelected] = useState<UserSelected>();
	const [userToDraw, setUserToDraw] = useState<DataUserResponse | undefined>();
	const [userResponse, setUserResponse] = useState<UserResponse[]>([]);
	let idKey;
	//pagination logic
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [postsPerPage] = useState<number>(3);
	const indexOfLastPost: number = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPost: UserResponse[] = userResponse?.slice(indexOfFirstPost, indexOfLastPost);
	const handlePage = (pageNumber: number) => setCurrentPage(pageNumber)

	useEffect(() => {
		const apiResponse = async () => {
			const res = await axios.get(`https://shielded-meadow-39651.herokuapp.com/api/users`);
			setUserResponse(res.data)
		};
		apiResponse();
	}, []);

	const handleUserModal = (id: UserSelected) => {
		if (!userModal) {
			setUserModal(true);
		} else {
			setUserModal(false);
		}
		setUserSelected(id);
	};

	useEffect(() => {
		userResponse?.find((user) => {
			if (user.data.id == userSelected) {
				setUserToDraw({
					id: user.data.id,
					name: user.data.name,
					username: user.data.username,
					email: user.data.email,
					address: {
						street: user.data.address.street,
						suite: user.data.address.suite,
						city: user.data.address.city,
						zipcode: user.data.address.zipcode,
						geo: {
							lat: user.data.address.geo.lat,
							lng: user.data.address.geo.lng,
						},
					},
					phone: user.data.phone,
					website: user.data.website,
					company: {
						name: user.data.company.name,
						catchPhrase: user.data.company.catchPhrase,
						bs: user.data.company.bs,
					},
				});
			}
		});
	}, [userSelected]);

	return (
		<>
			<User userToDraw={userToDraw} userModal={userModal} handleUserModal={handleUserModal} />
			<div className='w-full flex flex-col'>
				<div className='flex-grow'>
					{userResponse &&
						currentPost?.map((user) => {
							return (
								<div key={idKey = IdRandom()} data-cy={'users-container'} className='mx-5 my-3 bg-white shadow-md px-5 py-3 rounded-xl'>
									<p className='font-bold mb-3 text-gray-700 uppercase'>
										User ID: <span className='font-normal normal-case'>{user.data.id}</span>
									</p>
									<p className='font-bold mb-3 text-gray-700 uppercase'>
										Name: <span className='font-normal normal-case'>{user.data.name}</span>
									</p>
									<p className='font-bold mb-3 text-gray-700 uppercase'>
										Email: <span className='font-normal normal-case'>{user.data.email}</span>
									</p>
									<p className='font-bold mb-3 text-gray-700 uppercase'>
										Address: <span className='font-normal normal-case'>{user.data.address.street}</span>
									</p>
									<p className='font-bold mb-3 text-gray-700 uppercase'>
										Company: <span className='font-normal normal-case'>{user.data.company.name}</span>
									</p>
									<div className='flex justify-between mt-5'>
										<button
											data-cy={'detail-btn'}
											type='button'
											className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 rounded 
	  								text-white font-bold uppercase'
											onClick={() => {
												handleUserModal(user.data.id);
											}}
										>
											Details
										</button>
									</div>
								</div>
							);
						})}
				</div>
				<Pagination handlePage={handlePage} postsPerPage={postsPerPage} totalPosts={userResponse.length} />
			</div>
		</>
	);
};
