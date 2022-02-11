import React, {useEffect, useState} from 'react';
import {Task} from '../task/Task';
import {InputSearch} from '../layaout/InputSearch';
import {Pagination} from '../layaout/Pagination';
import axios from 'axios';
import {TaskResponse} from '../../types/Types';

export const Tasks = () => {
	const [taskResponse, setTaskResponse] = useState<TaskResponse[]>([]);

	//pagination logic
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [postsPerPage] = useState<number>(10);
	const indexOfLastPost: number = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPost: TaskResponse[] = taskResponse?.slice(indexOfFirstPost, indexOfLastPost);
	const handlePage = (pageNumber: number) => setCurrentPage(pageNumber);
	const [path, setPath] = useState<string>('/tasks');

	useEffect(() => {
		const apiResponse = async (path: string) => {
			const res = await axios.get(`https://shielded-meadow-39651.herokuapp.com/api${path}`);
			setTaskResponse(res.data);
		};
		apiResponse(path);
	}, [path]);

	return (
		<div data-cy={'tasks-container'} className='w-full md:h-screen flex flex-col sm:flex-col'>
			<div className='flex-grow'>
				<h2 data-cy={'tasks-title'} className='font-black text-3xl text-center'>
					Task Viewer
				</h2>
				<p className='font-bold mt-5 mb-10 text-center'>
					<InputSearch setPath={setPath} />
				</p>
				{currentPost.map((task) => (
					<Task
						user_id={task.data.user_id}
						id={task.data.id}
						title={task.data.title}
						completed={task.data.completed}
					/>
				))}
			</div>
			<Pagination handlePage={handlePage} postsPerPage={postsPerPage} totalPosts={taskResponse.length} />
		</div>
	);
};
