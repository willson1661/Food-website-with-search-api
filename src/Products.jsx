import React from "react";

const Products = ({ data, props }) => {
  return (
    <div>
      <div className="flex">
        {data.map((data) => (
          <div className="card">
            <div className="cen">
              <p>Meal : {data.strMeal}</p>
              <img src={data.strMealThumb} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
