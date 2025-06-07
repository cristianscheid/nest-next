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
    <div className="card bg-base-200 p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        {product.id ? "Edit Product" : "Create Product"}
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="form-control flex-1">
          <label className="label" htmlFor="name">
            <span className="label-text">Name</span>
          </label>
          <input
            id="name"
            type="text"
            value={product.name ?? ""}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="input input-bordered w-full"
            placeholder="Product name"
          />
        </div>

        <div className="form-control flex-1">
          <label className="label" htmlFor="description">
            <span className="label-text">Description</span>
          </label>
          <input
            id="description"
            type="text"
            value={product.description ?? ""}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            className="input input-bordered w-full"
            placeholder="Product description"
          />
        </div>

        <div className="form-control w-32">
          <label className="label" htmlFor="price">
            <span className="label-text">Price</span>
          </label>
          <input
            id="price"
            type="number"
            value={product.price ?? ""}
            onChange={(e) =>
              setProduct({ ...product, price: Number(e.target.value) })
            }
            className="input input-bordered w-full"
            placeholder="$0.00"
          />
        </div>

        <div className="form-control self-end">
          <button
            onClick={product.id ? onUpdate : onCreate}
            className={`btn btn-primary w-full ${
              product.id ? "btn-outline" : ""
            }`}
          >
            {product.id ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
