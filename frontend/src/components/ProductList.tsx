"use client";

import { Product } from "@/hooks/useProducts";

interface ProductListProps {
  products: Product[];
  onEdit: (id: number) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export default function ProductList({
  products,
  onEdit,
  onDelete,
}: ProductListProps) {
  return (
    <div className="card bg-base-200 p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Product List</h2>
      {products.length === 0 ? (
        <div className="text-center">No products found.</div>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-base-100 p-4 rounded-lg shadow"
            >
              <div className="flex-1">
                <div className="font-semibold text-lg">{product.name}</div>
                <div className="text-sm">{product.description}</div>
              </div>
              <div className="font-medium">$ {product.price.toFixed(2)}</div>
              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(product.id!)}
                  className="btn btn-success btn-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(product.id!)}
                  className="btn btn-error btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
