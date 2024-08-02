import React from "react";
import Link from "next/link";

export default async function Page({ params }) {
  const { id } = params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Link
        className="inline-block mb-6 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        href="/"
      >
        <p>Back</p>
      </Link>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <strong className="block mt-4 text-xl text-gray-900">
            ${product.price}
          </strong>
        </div>
      </div>
    </div>
  );
}
