'use client';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<main className='flex-grow container mx-auto p-4 mt-16'>{children}</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
