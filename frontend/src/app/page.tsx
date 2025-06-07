"use client";

import { useProducts } from "../hooks/useProducts";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default function Home() {
  const {
    products,
    product,
    setProduct,
    fetchProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  } = useProducts();

  return (
    <main className="flex flex-col justify-center items-center h-screen gap-10">
      <ProductForm
        product={product}
        setProduct={setProduct}
        onCreate={createProduct}
        onUpdate={updateProduct}
      />
      <ProductList
        products={products}
        onEdit={fetchProductById}
        onDelete={deleteProduct}
      />
    </main>
  );
}
