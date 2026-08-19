import { useEffect, useState } from "react";
import type { Product } from "../../models/product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetch("https://localhost:5015/api/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
