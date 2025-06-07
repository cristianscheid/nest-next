'use client'

import {useEffect, useState} from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL

type Product = {
    id?: number
    name?: string
    description?: string
    price?: number
}

export default function Home() {
    const [product, setProduct] = useState<Product>({})
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        const resp = await fetch(`${API_URL}/products`)
        const products = await resp.json()
        setProducts(products)
    }

    async function createProduct() {
        await fetch(`${API_URL}/products`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product),
        })
        setProduct({})
        await fetchProducts()
    }

    async function updateProduct() {
        await fetch(`${API_URL}/products/${product.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product),
        })
        setProduct({})
        await fetchProducts()
    }

    async function fetchProductById(id: number) {
        const resp = await fetch(`${API_URL}/products/${id}`)
        const product = await resp.json()
        setProduct(product)
    }

    async function deleteProduct(id: number) {
        await fetch(`${API_URL}/products/${id}`, {method: 'DELETE'})
        await fetchProducts()
    }

    function renderProductForm() {
        return (
            <div className="flex gap-5 items-end">
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={product.name ?? ''}
                        onChange={(e) => setProduct({...product, name: e.target.value})}
                        className="bg-zinc-700 p-2 rounded-md"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description">Description</label>
                    <input
                        id="description"
                        type="text"
                        value={product.description ?? ''}
                        onChange={(e) => setProduct({...product, description: e.target.value})}
                        className="bg-zinc-700 p-2 rounded-md"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="price">Price</label>
                    <input
                        id="price"
                        type="number"
                        value={product.price ?? ''}
                        onChange={(e) => setProduct({...product, price: +e.target.value})}
                        className="bg-zinc-700 p-2 rounded-md"
                    />
                </div>
                <div>
                    {product.id ? (
                        <button onClick={updateProduct} className="bg-blue-500 px-4 py-2 rounded-md">
                            Update Product
                        </button>
                    ) : (
                        <button onClick={createProduct} className="bg-blue-500 px-4 py-2 rounded-md">
                            Create Product
                        </button>
                    )}
                </div>
            </div>
        )
    }

    function renderProducts() {
        return (
            <div className="flex flex-col gap-2">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-md"
                    >
                        <div className="flex-1">{product.name}</div>
                        <div>{product.price}</div>
                        <div>
                            <button
                                onClick={() => fetchProductById(product.id!)}
                                className="bg-green-500 p-2 rounded-md"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteProduct(product.id!)}
                                className="bg-red-500 p-2 rounded-md"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-10">
            {renderProductForm()}
            {renderProducts()}
        </div>
    )
}
