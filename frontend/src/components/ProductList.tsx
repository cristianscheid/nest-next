"use client";

interface ProductListProps {
  products: any[];
  onEdit: (id: number) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export default function ProductList({
  products,
  onEdit,
  onDelete,
}: ProductListProps) {
  return (
    <div className="flex flex-col gap-2">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center gap-2 px-4 py-2 rounded-md"
        >
          <div className="flex-1">{product.name}</div>
          <div>{product.price}</div>
          <div>
            <button
              onClick={() => onEdit(product.id)}
              className="p-2 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product.id)}
              className="p-2 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
