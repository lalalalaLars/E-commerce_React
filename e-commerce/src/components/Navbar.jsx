import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useAuth } from "../services/auth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="navbar-container">
      <div>
        <Link style={{ textDecoration: "none" }} to="/">
          <h3>Shooop.</h3>
        </Link>
      </div>
      <div className="row-flex-items-center">
        {isAuthenticated ? (
          <>
            <Link style={{ textDecoration: "none" }} to="/cart">
              <ShoppingCartOutlinedIcon className="icon" />
            </Link>
            <Link style={{ textDecoration: "none" }} to="/profile">
              <PersonOutlineOutlinedIcon className="icon" />
            </Link>

            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
