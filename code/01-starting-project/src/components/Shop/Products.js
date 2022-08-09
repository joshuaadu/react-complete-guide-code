import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://redux-store-test-default-rtdb.firebaseio.com/products.json"
			);
			if (!response.ok) throw new Error(response.body);
			const data = await response.json();
			setProducts(Object.entries(data));
			console.log("data", Object.entries(data));
		};
		fetchData().catch((error) => setError(error.message));
	}, [setProducts]);
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{products?.length ? (
					products.map(([name, details]) => (
						<ProductItem
							title={name}
							price={details.price}
							description={details.description}
							key={details.id}
						/>
					))
				) : (
					<p>Unable to load products from server!</p>
				)}
			</ul>
		</section>
	);
};

export default Products;
