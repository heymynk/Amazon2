import React from "react";

export default function ProductFeed({ products }) {
  return (
    <div>
      {/* {products.map((product)=>(
        <p>{product.title}</p>
    ))} */}

      {products.map(({ id, title, price, description, category, image }) => (
        <p>{title}</p>
      ))}
    </div>
  );
}
