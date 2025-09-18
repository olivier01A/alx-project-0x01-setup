import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ username, street, catchPhrase }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
          {username.charAt(0).toUpperCase()}
        </div>

        {/* Username */}
        <h2 className="text-xl font-semibold text-gray-800">{username}</h2>

        {/* Street */}
        <p className="text-gray-500 text-sm mt-1">{street}</p>

        {/* CatchPhrase */}
        <blockquote className="italic text-gray-600 mt-3 border-l-4 border-indigo-500 pl-3">
          “{catchPhrase}”
        </blockquote>
      </div>
    </div>
  );
};

export default UserCard;
