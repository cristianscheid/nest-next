"use client";

interface ProductFormProps {
  product: any;
  setProduct: React.Dispatch<React.SetStateAction<any>>;
  onCreate: () => Promise<void>;
  onUpdate: () => Promise<void>;
}

export default function ProductForm({
  product,
  setProduct,
  onCreate,
  onUpdate,
}: ProductFormProps) {
  return (
    <div className="flex gap-5 items-end">
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={product.name ?? ""}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          className="p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={product.description ?? ""}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          className="p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          value={product.price ?? ""}
          onChange={(e) =>
            setProduct({ ...product, price: Number(e.target.value) })
          }
          className="p-2 rounded-md"
        />
      </div>
      <div>
        {product.id ? (
          <button onClick={onUpdate} className="px-4 py-2 rounded-md">
            Update Product
          </button>
        ) : (
          <button onClick={onCreate} className="px-4 py-2 rounded-md">
            Create Product
          </button>
        )}
      </div>
    </div>
  );
}
