import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gray-900 text-white p-4 shadow-md">
      <h1 className="text-2xl font-bold mb-4">Hello Alaric</h1>
      <ul className="flex gap-6 list-none">
        <li>
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </li>
        <li>
          <Link to="/product" className="hover:text-blue-400 transition">Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
