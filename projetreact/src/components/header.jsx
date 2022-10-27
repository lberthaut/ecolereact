import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/experiences">Experiences</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}
