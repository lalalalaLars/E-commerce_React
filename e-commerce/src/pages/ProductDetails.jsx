import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const truncateString = (str, numWords) => {
  const words = str.split(" ");
  if (words.length <= numWords) {
    return str;
  }
  const truncatedWords = words.slice(0, numWords);
  return truncatedWords.join(" ") + " ...";
};

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="p-details-container">
      <div className="details-content-wrapper">
        <img src={product.image} alt={product.title} />
        <div className="p-details-content">
          <h4>{product.title}</h4>
          <p> {truncateString(product.description, 30)}</p>
          <h1> $ {product.price}</h1>
          <div className="add-cart-btn">
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
