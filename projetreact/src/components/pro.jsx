import React from "react";
import { NavLink } from "react-router-dom";

export default function XpPro(props) {
  const { pro } = props;
  return (
    <>
      <p className="xp_text">{pro}</p>
      <p className="xp_text">{pro}</p>
      <p className="xp_text">{pro}</p>
      <p className="xp_text">{pro}</p>
      <NavLink to="/" className="link_home">
        Revenir à l'acueil
      </NavLink>
    </>
  );
}
