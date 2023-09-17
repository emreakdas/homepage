import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="mb-24 flex items-center justify-between">
      <div>
        <NavLink to="/" className="text-xl mb-2">
          Emre AKDAŞ
        </NavLink>
        <span className="block text-gray-800/70">Frontend Developer</span>
      </div>
      <div>
        <NavLink
          to="/tools"
          className={({ isActive }) => isActive || "text-gray-500"}
        >
          Tools
        </NavLink>
      </div>
    </header>
  );
}
