import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
	const products = useSelector((state) => state.products.items);

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
