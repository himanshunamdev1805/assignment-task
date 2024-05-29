import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Users() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, [id]);

  return (
    <div className="container mx-auto px-4">
      <div className="mt-10">
        <Link
          to={"/"}
          className="bg-black hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg mb-8 inline-block"
        >
          Back to Home
        </Link>
      </div>
      {user && (
        <div className="max-w-4xl mx-auto bg-black rounded-lg shadow-xl p-8">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="text-white text-3xl font-bold">Name:</td>
                <td className="text-white text-3xl font-bold">{user.name}</td>
              </tr>
              <tr>
                <td className="text-white text-3xl font-bold">Email:</td>
                <td className="text-white text-3xl font-bold">{user.email}</td>
              </tr>
              <tr>
                <td className="text-white text-3xl font-bold">Phone:</td>
                <td className="text-white text-3xl font-bold">{user.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Users;
