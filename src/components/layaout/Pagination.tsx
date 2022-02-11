import {PaginationType} from '../../types/Types';

export const Pagination: React.FC<PaginationType> = (props: {
	totalPosts: number;
	postsPerPage: number;
	handlePage: Function;
}) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
			<div data-cy={'pagination-bar'} className=' sm:flex-1 sm:flex sm:items-center sm:justify-between'>
				<div>
					<nav className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
						{pageNumbers.map((page) => (
							<a
								data-cy={'link-page-number'}
								key={page}
								onClick={() => props.handlePage(page)}
								href='#'
								aria-current='page'
								className='z-10 hover:shadow bg-indigo-50 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
							>
								{page}
							</a>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
};
