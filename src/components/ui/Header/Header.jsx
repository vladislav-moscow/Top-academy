"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
/** Массив пунктов меню */
const navItems = [
	{ name: 'Home', path: '/' },
	{ name: 'Cards', path: '/cards' },
];

/**
 * Компонент Шапка.
 * @returns {JSX.Element} Элемент header.
 */
const Header = () => {
	const pathname = usePathname();
	/**
	 * Определяет, активна ли ссылка.
	 * @param {string} path - Путь ссылки.
	 * @returns {boolean} ссылка активна или нет.
	 */
	const isActiveLink = (path) => {
		return (
			pathname === path || (path === '/cards' && pathname.startsWith('/cards'))
		);
	};

	return (
		<header className='bg-white text-gray-900 p-4 shadow-lg fixed top-0 w-full z-10'>
			<nav className='container mx-auto flex justify-between items-center'>
				<Link href='/' className='text-lg font-bold hover:text-gray-700'>
					My App
				</Link>
				<div className='space-x-4'>
					{navItems?.map((item) => (
						<Link
							href={item?.path}
							key={item?.path}
							className={`px-3 py-2 rounded transition ${
								isActiveLink(item?.path) ? 'text-blue-500' : ''
							}`}
						>
							{item?.name}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
};

export default Header;
