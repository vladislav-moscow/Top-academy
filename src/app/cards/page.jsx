'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { initialProducts } from '../../../data';
import Card from '@/components/ui/Card/Card';
import MainLayout from '@/components/ui/MainLayout/MainLayout';

const Cards = () => {
	const router = useRouter();
	const [products, setProducts] = useState(initialProducts);

	useEffect(() => {
		const storedFavoriteProducts = localStorage.getItem('favorite');
		if (storedFavoriteProducts) {
			const favoriteProducts = JSON.parse(storedFavoriteProducts);
			const updatedProducts = initialProducts.map((product) => ({
				...product,
				isFavorite: favoriteProducts.includes(product.id),
			}));
			setProducts(updatedProducts);
		} else {
			setProducts(initialProducts);
		}
	}, []);

	const handleCardClick = (id) => {
		router.push(`/cards/${id}`);
	};

	const handleToggleFavorite = (id) => {
		const currentProducts = [...products];
		const product = currentProducts.find((product) => product.id === id);
		if (product) {
			product.isFavorite = !product.isFavorite;
			setProducts(currentProducts);

			const favoriteProducts = currentProducts
				.filter((product) => product.isFavorite)
				.map((product) => product.id);

			localStorage.setItem('favorite', JSON.stringify(favoriteProducts));
		}
	};

	return (
		<MainLayout>
			<section className='products'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-wrap justify-between'>
						{products.map((product) => (
							<Card
								key={product.id}
								details={product}
								onCardClick={handleCardClick}
								onToggleFavorite={handleToggleFavorite}
							/>
						))}
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default Cards;
