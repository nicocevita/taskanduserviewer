import React from 'react';
import {DataTaskResponse} from '../../types/Types';

export const Task: React.FC<DataTaskResponse> = (props: {
	user_id: Number;
	id: Number;
	title: String;
	completed: Boolean;
}) => {
	return (
		<>
			<div data-cy={"task-container"} className='flex mx-5 my-5 bg-white shadow-md px-5 py-3 rounded-xl '>
				<p className='font-bold uppercase text-gray-700 mr-3'>
					User ID: <span data-cy={`task-user-id`} className='font-normal normal-case text-indigo-800'>{props.user_id}</span>
				</p>
				<p className='font-bold text-gray-700 uppercase mr-3'>
					Task ID: <span className='font-normal normal-case text-indigo-800'>{props.id}</span>
				</p>
				<p className='font-bold text-gray-700 uppercase mr-3'>
					Title: <span className='font-normal normal-case text-indigo-800'>{props.title}</span>
				</p>
				<p className='font-bold text-gray-700 uppercase mr-3'>
					Status:{' '}
					<span data-cy={'task-status'} className={`normal-case font-bold ${props.completed === false ? 'text-green-600' : 'text-red-600'}`}>
						{props.completed === false ? 'COMPLETED' : 'INCOMPLETED'}
					</span>
				</p>
			</div>
		</>
	);
};
