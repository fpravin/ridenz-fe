import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../interfaces/products";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => { });
  }, []);

  return (
    <div className="content">
      <h1>Shop Now</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.productId}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
