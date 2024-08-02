import Link from "next/link";
import React from "react";

export default async function Page({ params }) {
  const { id } = params;
  let user = null;
  
  try {
    const response = await fetch(`https://fakestoreapi.com/users/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching user with id ${id}`);
    }

    user = await response.json();
  } catch (error) {
    console.error(error);
  }

  if (!user) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
        <Link
          className="mb-6 text-blue-500 hover:text-blue-700 font-semibold text-lg"
          href="/"
          passHref
        >
          <p>&larr; Back</p>
        </Link>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
          <p className="text-2xl font-semibold text-gray-800 mb-2">
            User not found
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <Link
        className="mb-6 text-blue-500 hover:text-blue-700 font-semibold text-lg"
        href="/"
        passHref
      >
        <p>&larr; Back</p>
      </Link>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
        <img
          src="/user.png"
          alt="User Image"
          className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
        />
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          {user.name.firstname}
        </p>
        <strong className="text-gray-600">Email: {user.email}</strong>
      </div>
    </div>
  );
}
