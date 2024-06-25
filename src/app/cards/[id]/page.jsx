'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { initialProducts } from '../../../../data';
import MainLayout from '@/components/ui/MainLayout/MainLayout';

const CardDetail = () => {
	const router = useRouter();
	//const { id } = router.query; // Деструктуризация id из объекта query
	const { id } = router.query ?? {};

	//const { id } = pathname.query; // Деструктуризация id из router.query
	const [isFavorite, setFavorite] = useState(false); // Стейт для того, чтобы пометить товар сохраненным или нет.

	useEffect(() => {
		// Проверяем, что id определён и не является undefined
		if (id) {
			const storedFavoriteProducts = localStorage.getItem('favorite');
			if (storedFavoriteProducts) {
				const favoriteProducts = JSON.parse(storedFavoriteProducts);
				const isProductInStorage = favoriteProducts.includes(pathname);
				setFavorite(isProductInStorage);
			}
		}
	}, [id]); // Зависимость эффекта от id

	// Проверка наличия id в router.query до отрисовки компонента
	if (!id) {
		return <div>Loading...</div>;
	}

	// Находим карточку по id
	const product = initialProducts.find((product) => product.id === id);

	// Если продукт не найден, выводим заглушку
	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<MainLayout>
			<section className='card-details'>
				<div className='container mx-auto p-4'>
					<Link href='/cards'>Вернуться назад</Link>
					<div className='max-w-md rounded shadow-lg relative'>
						<img className='w-full' src={product.imgSrc} alt={product.title} />
						<button
							className={`absolute top-0 left-0 m-2 p-2 rounded-full ${
								isFavorite ? 'text-red-500' : 'text-white'
							}`}
							onClick={handleToggleFavorite}
						>
							<svg
								className='w-6 h-6 fill-current'
								viewBox='0 0 32 32'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z'></path>
							</svg>
						</button>
						<div className='px-6 py-4'>
							<div className='font-bold text-xl mb-2'>{product.title}</div>
							<p className='text-gray-600 text-sm mb-2'>
								{product.description}
							</p>
							<p className='text-gray-600 text-sm mb-2'>{product.category}</p>
							{product.rating && (
								<div className='text-yellow-500 mb-2'>
									{'★'.repeat(Math.floor(product.rating)) +
										'☆'.repeat(5 - Math.floor(product.rating))}
								</div>
							)}
							<div className='text-lg font-bold mb-2'>{product.price}$</div>
							<button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default CardDetail;
