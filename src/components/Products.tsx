import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../interfaces/users";

const Products = () => {
  const [products, setProducts] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((e) => { });
  }, []);

  return (
    <div className="content">
      <h1>Shop Now</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h2>{product.firstName}</h2>
            <p>{product.lastName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
