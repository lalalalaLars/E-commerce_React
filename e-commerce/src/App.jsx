import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LandingPage, LoginForm, Profile, ProductDetails, Cart } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
