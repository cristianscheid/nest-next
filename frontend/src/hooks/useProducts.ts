"use client";

import { useState, useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export interface Product {
  id?: number;
  name: string;
  description?: string;
  price: number;
}

const emptyProduct: Product = {
  name: "",
  description: "",
  price: 0,
};

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>(emptyProduct);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_URL}/products`);
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError("Failed to fetch products");
    }
  };

  const fetchProductById = async (id: number) => {
    try {
      const res = await fetch(`${API_URL}/products/${id}`);
      if (!res.ok) throw new Error("Failed to fetch product");
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      setError("Failed to fetch product");
    }
  };

  const createProduct = async () => {
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      if (!res.ok) throw new Error("Failed to create product");
      setProduct(emptyProduct);
      setSuccess("Product created successfully!");
      await fetchProducts();
    } catch (err) {
      setError("Failed to create product");
    }
  };

  const updateProduct = async () => {
    if (!product.id) return;
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch(`${API_URL}/products/${product.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      if (!res.ok) throw new Error("Failed to update product");
      setProduct(emptyProduct);
      setSuccess("Product updated successfully!");
      await fetchProducts();
    } catch (err) {
      setError("Failed to update product");
    }
  };

  const deleteProduct = async (id: number) => {
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete product");
      setSuccess("Product deleted successfully!");
      await fetchProducts();
    } catch (err) {
      setError("Failed to delete product");
    }
  };

  return {
    products,
    product,
    error,
    success,
    setProduct,
    setError,
    setSuccess,
    fetchProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };
}
