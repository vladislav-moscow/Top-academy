import Card from "../components/ui/Card/Card";
import { initialProducts } from "../../data"

export default function Home() {

	// Данные карточек (продукты)
	
	return (
		<>
			<section className="products">
				<div className="container mx-auto px-2">
					<div className="flex flex-wrap justify-center gap-4 md:justify-between">
						{!!initialProducts &&
							initialProducts.map((product) => (
								<Card key={product?.id} details={product} />
							))}
					</div>
				</div>
			</section>
		</>
	);
}
