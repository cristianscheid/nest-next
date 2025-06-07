"use client";

import { useState, useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export function useProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await fetch(`${API_URL}/products`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  async function fetchProductById(id: number) {
    try {
      const res = await fetch(`${API_URL}/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
  }

  async function createProduct() {
    try {
      await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      setProduct({});
      fetchProducts();
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  }

  async function updateProduct() {
    try {
      await fetch(`${API_URL}/products/${product.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      setProduct({});
      fetchProducts();
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  }

  async function deleteProduct(id: number) {
    try {
      await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE",
      });
      fetchProducts();
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  }

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
