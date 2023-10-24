import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import { removeFromCart } from "../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch(); // Initialize dispatch

  const handleRemoveProduct = (productId) => {
    console.log("Cart state before removal:", cart);
    // Dispatch the action to remove the product from the cart
    dispatch(removeFromCart(productId));
    console.log("Cart state after removal:", cart);
  };

  const totalSum = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-content-container">
        {cart.map((product) => (
          <div className="cart-content-wrapper" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="cart-content">
              <h5> {product.title}</h5>
              <h5>
                pcs: {product.quantity}
                {product.quantity !== 1 ? "" : ""}
              </h5>
              <h4>$ {product.price}</h4>
              <div
                className="remove-product"
                onClick={() => handleRemoveProduct(product.id)}
              >
                <DeleteForeverOutlinedIcon id="bin-icon" fontSize="small" />
                <h5>remove</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="buy-items-container">
        <div className="total-price">
          <h2>Total price</h2>
          <div className="subtotal">
            <h4>Subtotal</h4>
            <h4>$ {totalSum}</h4>
          </div>
        </div>
        <div className="buttons">
          <button>Purchase</button>
          <Link style={{ textDecoration: "none" }} to="/">
            <p>continue shopping</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
