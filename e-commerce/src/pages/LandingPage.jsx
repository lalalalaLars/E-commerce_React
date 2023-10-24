import { ProductCard, Categories } from "../components";

import { useState } from "react";

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <>
      <div className="grid">
        <div>
          <Categories onCategorySelect={setSelectedCategory} />
        </div>
        <div>
          <ProductCard selectedCategory={selectedCategory} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
