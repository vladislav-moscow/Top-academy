"use client"
import MainLayout from "@/components/ui/MainLayout/MainLayout";

export default function Home() {

	/**
 * Компонент карточка
 * @property {object} product - объект товара
 * @property {string} initialProducts - массив базы данных
 * @returns {JSX.Element} Элемент JSX
 */

	return (
		<MainLayout>
			<div className="container mx-auto p-4">
				<h1 className="text-2xl font-bold">Home Page</h1>
				<p>Welcome to the home page!</p>
			</div>
		</MainLayout>
	);
}
