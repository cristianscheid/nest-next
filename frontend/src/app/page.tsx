"use client";

import { useProducts } from "@/hooks/useProducts";
import ProductForm from "@/components/ProductForm";
import ProductList from "@/components/ProductList";
import Logo from "@/components/Logo";
import Toast from "@/components/Toast";

export default function Home() {
  const {
    products,
    product,
    error,
    success,
    setError,
    setSuccess,
    setProduct,
    fetchProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  } = useProducts();

  return (
    <main
      data-theme="coffee"
      className="min-h-screen flex flex-col items-center px-4 py-8"
    >
      <Logo />
      {error && (
        <Toast type="error" message={error} onClose={() => setError(null)} />
      )}
      {success && (
        <Toast
          type="success"
          message={success}
          onClose={() => setSuccess(null)}
        />
      )}
      <section className="w-full max-w-4xl flex flex-col gap-8 mt-8">
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
      </section>
    </main>
  );
}
