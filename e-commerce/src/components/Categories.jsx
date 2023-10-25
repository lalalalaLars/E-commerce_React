/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCategories } from "../features/categoriesSlice";

const Categories = ({ onCategorySelect }) => {
  const categories = useSelector((state) => state.categories.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <ul className="categories">
        <h3>Categories</h3>
        <li onClick={() => onCategorySelect(null)}>all</li>
        {categories.map((category) => (
          <li key={category.id} onClick={() => onCategorySelect(category)}>
            {category}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
