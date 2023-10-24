/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../features/productSlice"; // Import the action to fetch products

const truncateString = (str, numWords) => {
  const words = str.split(" ");
  if (words.length <= numWords) {
    return str;
  }
  const truncatedWords = words.slice(0, numWords);
  return truncatedWords.join(" ") + " ...";
};

const ProductCard = ({ selectedCategory }) => {
  // Use useSelector to access the product state
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action to fetch products when the component mounts
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <div className="card-container">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <Link to={`/product/${product.id}`} key={product.id}>
              <img src={product.image} alt="" />
            </Link>
            <div className="card-content">
              <div>
                <h5>{truncateString(product.title, 3)}</h5>
                <h4>$ {product.price}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
