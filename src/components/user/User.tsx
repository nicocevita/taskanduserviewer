import React from 'react';
import UserIcon from '../../resources/image/user.svg';
import {UserProps} from '../../types/Types';
import {DataUserResponse} from '../../types/Types';

export const User: React.FC<UserProps> = (props: {
	userModal: boolean;
	handleUserModal: Function;
	userToDraw: DataUserResponse | undefined;
}) => {
	const data = props.userToDraw;
	return (
		<div
			data-cy={'user-detail-contaier'}
			id='modal-flex-container'
			className={`${!props.userModal && 'hidden'} fixed inset-0`}
		>
			<div
				id='modal-flex-container'
				className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'
			>
				<div id='modal-bg-container' className='fixed inset-0 bg-gray-700 bg-opacity-75'></div>
				<div
					id='modal-space-container'
					className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl 
  transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full'
				>
					<div id='modal-container'>
						<div id='modal-wrapper' className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
							<div id='modal-wrapper-flex' className='sm:flex sm:items-start'>
								<div
									id='modal-icon'
									className='mx-auto flex-shrink-0 flex items-center 
		  justify-center h-12 w-12 rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10'
								>
									<img className='w-6 h-6 fill-current text-red-600' src={UserIcon} alt='User Icon' />
								</div>
								<div id='modal-content' className='text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left'>
									<h3 data-cy={'user-id-data'} className='text-lg font-medium text-gray-900'>
										User ID
									</h3>
									<div className='modal-text mb-3'>
										<p className='text-gray-500 text-sm'>{data?.id}</p>
									</div>
									<h3 data-cy={'user-name-data'} className='text-lg font-medium text-gray-900'>
										Name
									</h3>
									<div className='modal-text mb-3'>
										<p className='text-gray-500 text-sm'>{data?.name}</p>
									</div>
									<h3 data-cy={'user-surname-data'} className='text-lg font-medium text-gray-900'>
										Username
									</h3>
									<div className='modal-text mb-3'>
										<p className='text-gray-500 text-sm'>{data?.username}</p>
									</div>
									<h3 className='text-lg font-medium text-gray-900'>Email</h3>
									<div className='modal-text mb-3'>
										<p className='text-gray-500 text-sm'>{data?.email}</p>
									</div>
									<h3 className='text-lg font-medium text-gray-900'>Address</h3>
									<div className='modal-text mb-3'>
										<p className='text-gray-500 text-sm'>{`Street: ${data?.address.street}`}</p>
										<p className='text-gray-500 text-sm'>{`Suite: ${data?.address.suite}`}</p>
										<p className='text-gray-500 text-sm'>{`City: ${data?.address.city}`}</p>
										<p className='text-gray-500 text-sm'>{`Zipcode: ${data?.address.zipcode}`}</p>
										<p className='text-gray-500 text-sm'>{`Geolocation: ${data?.address.geo.lat} ${data?.address.geo.lng}`}</p>
									</div>
									<h3 className='text-lg font-medium text-gray-900'>Phone</h3>
									<div className='modal-text mb-3'>
										<p className='text-gray-500 text-sm'>{data?.phone}</p>
									</div>
									<h3 className='text-lg font-medium text-gray-900'>Website</h3>
									<div className='modal-text mb-3'>
										<p className='text-gray-500 text-sm'>{data?.website}</p>
									</div>
									<h3 className='text-lg font-medium text-gray-900'>Company</h3>
									<div className='modal-text mb-3'>
										<p className='text-gray-500 text-sm'>{`Name: ${data?.company.name}`}</p>
										<p className='text-gray-500 text-sm'>{`Catch Phrase: ${data?.company.catchPhrase}`}</p>
										<p className='text-gray-500 text-sm'>{`Bs: ${data?.company.bs}`}</p>
									</div>
								</div>
							</div>
						</div>
						<div
							id='modal-actions'
							onClick={() => {
								props.handleUserModal();
							}}
							className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'
						>
							<button
								data-cy={'user-btn-close'}
								className=' 
		inline-flex 
		justify-center 
		rounded-md 
		border border-transparent 
		shadow-md 
		px-4 
		py-2 
		bg-white 
		font-medium 
		text-gray-700
		hover:bg-gray-50
		focus:outline-none focus:ring-2 focus:ring-offset-2
		focus:ring-blue-500 w-full
		sm:mt-0 sm:ml-3 sm:text-sm'
							>
								CLOSE
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
