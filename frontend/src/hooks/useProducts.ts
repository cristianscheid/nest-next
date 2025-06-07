"use client";

import { useState, useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export interface Product {
  id?: number;
  name: string;
  description: string;
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

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_URL}/products`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const fetchProductById = async (id: number) => {
    try {
      const res = await fetch(`${API_URL}/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
  };

  const createProduct = async () => {
    try {
      await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      setProduct(emptyProduct);
      await fetchProducts();
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  const updateProduct = async () => {
    if (!product.id) return;
    try {
      await fetch(`${API_URL}/products/${product.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      setProduct(emptyProduct);
      await fetchProducts();
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE",
      });
      await fetchProducts();
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return {
    products,
    product,
    setProduct,
    fetchProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };
}
