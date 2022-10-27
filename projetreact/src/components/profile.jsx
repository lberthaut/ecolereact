import React from "react";
import { NavLink } from "react-router-dom";

export default function Profile({ name, age, adress, job, phone }) {
  return (
    <div className="infos_container">
      <h1 className="name">{name}</h1>
      <p className="profile_infos">{age}</p>
      <p className="profile_infos">{adress}</p>
      <p className="profile_infos">{job}</p>
      <p className="profile_infos">{phone}</p>
      <NavLink to="/" className="link_home">
        Retour à l'accueil
      </NavLink>
    </div>
  );
}
