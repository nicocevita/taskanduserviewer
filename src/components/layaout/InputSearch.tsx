import React from 'react';
import {SearchTypeId} from '../../types/Types';

export const InputSearch: React.FC<SearchTypeId> = (props: {setPath: Function}) => {
	return (
		<div className=' mt-3 container flex mx-auto justify-center'>
			<div className='flex border-2 rounded'>
				<button className='flex items-center justify-center px-4 border-r hover:shadow'>
					<svg
						className='w-6 h-6 text-gray-600'
						fill='currentColor'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
					>
						<path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'></path>
					</svg>
				</button>
				<input
					data-cy={'input-search'}
					type='text'
					className='px-4 py-2 w-80'
					placeholder='Search task by User ID'
					onChange={(event) => {
						if (event.target.value.toUpperCase() == 'COMPLETED') {
							props.setPath(`/tasks/status/2`);
						} else if (event.target.value.toUpperCase() == 'INCOMPLETED') {
							props.setPath(`/tasks/status/1`);
						} else if (parseInt(event.target.value) > 0) {
							props.setPath(`/users/${event.target.value}/tasks`);
						} else {
							props.setPath('/tasks');
						}
					}}
				/>
			</div>
		</div>
	);
};
