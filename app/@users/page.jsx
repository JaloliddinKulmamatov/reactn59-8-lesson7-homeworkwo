import Link from "next/link";

export default async function Users() {
  const response = await fetch("https://fakestoreapi.com/users");
  const users = await response.json();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        User List
      </h1>
      <ul className="space-y-4">
        {users.map((u) => (
          <li
            key={u.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Link className="block p-4 text-center" href={`/${u.id}`} passHref>
             <p className="text-xl font-semibold text-gray-900">
                  {u.name.firstname}
                </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
