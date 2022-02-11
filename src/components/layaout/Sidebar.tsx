import {useEffect, useState} from 'react';
import Logo from '../../resources/image/logo.svg';
import Menu from '../../resources/image/menu.svg';
import {Link, Outlet} from 'react-router-dom';

export const SideBar = () => {
	const [sideBar, setSideBar] = useState<boolean>(false);

	const handleMenu = () => {
		if (!sideBar) {
			setSideBar(true);
		} else {
			setSideBar(false);
		}
	};

	return (
		<div className='bg-gray-400 min-h-screen min-w-min md:flex'>
			<div className='bg-gray-800 text-gray-100 flex justify-between md:hidden'>
				<a className='block p-4 text-white font-bold'>NavBar</a>
				<button onClick={handleMenu} className='p-4 focus: outline-none focus:bg-gray-700'>
					<img className='h-5 w-5' src={Menu} />
				</button>
			</div>

			<div
				className={`bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 
            transform transition duration-200 ease-out md:relative md:translate-x-0 
            ${!sideBar && '-translate-x-full'}`}
			>
				<a className='text-white flex items-center space-x-2 px-2'>
					<img className='w-8 h-8' src={Logo} />
					<span data-cy='title' className='text-2x1 font font-extrabold font-'>
						User and Task viewer
					</span>
				</a>
				<nav>
					<Link
						data-cy='link-users'
						to={'/users'}
						className='block py-2.5 px-4 rounded hover:bg-blue-700 
                    transition duration-200 hover:text-white'
					>
						Users
					</Link>
					<Link
						data-cy='link-tasks'
						to={'/tasks'}
						className='block py-2.5 px-4 rounded hover:bg-blue-700 
                    transition duration-200 hover:text-white'
					>
						Tasks
					</Link>
				</nav>
			</div>
			<Outlet />
		</div>
	);
};
