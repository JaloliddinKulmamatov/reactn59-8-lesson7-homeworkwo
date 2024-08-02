import React from "react";
import Link from "next/link";

export default async function Page() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <Link
                className="text-lg font-semibold text-gray-800 hover:text-blue-600"
                href={`/${p.id}`}
                passHref
              >
                <p>{p.title}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
