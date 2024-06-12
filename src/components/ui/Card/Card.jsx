import Image from 'next/image';
/**
 * Компонент карточка
 * @property {string} props.title - Название карточки
 * @property {string} props.category - Категория карточки
 * @property {string} props.description - Описание карточки
 * @property {string} props.price - Цена карточки
 * @property {number} props.rating - Рейтинг карточки
 * @property {string} props.imgSrc - Путь к изображению
 * @returns {JSX.Element} Элемент JSX
 */
const Card = (props) => {
	const { title, category, description, price, imgSrc } = props.details;

	return (
		<div className='max-w-sm w-full sm:max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-xs mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg mb-4'>
			<div className='relative'>
				<Image
					priority={true}
					src={imgSrc}
					width={320}
					height={176}
					alt={`${title}`}
					className='w-full max-h-44 object-cover'
				/>

				<div className='absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium'>
					SALE
				</div>
			</div>
			<div className='p-4'>
				<h3 className='text-lg font-medium mb-2'>{title}</h3>
				<p className='text-gray-600 text-sm mb-4'>{description}</p>
				<p className='text-gray-600 text-sm mb-4'>{category}</p>
				<div className='flex items-center justify-between'>
					<span className='font-bold text-lg'>{price}</span>
					<button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
};
export default Card;
