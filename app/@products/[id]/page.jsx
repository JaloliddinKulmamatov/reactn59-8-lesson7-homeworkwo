import React from "react";
import Link from "next/link";

export default async function Page({ params }) {
  const { id } = params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <Link
        className="mb-6 text-blue-500 hover:text-blue-700 font-semibold text-lg"
        href="/"
        passHref
      >
        &larr; Back
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full p-6 text-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {product.title}
        </h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <strong className="text-xl text-gray-900">${product.price}</strong>
      </div>
    </div>
  );
}
