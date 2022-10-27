import React from "react";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import XpPro from "../pro";
import Profile from "../profile";
import Header from "../header";
import Accueil from "../accueil";

export default function Reactrouter() {
  const [name, setName] = useState("Ash Williams");
  const [pic, setPic] = useState(
    "https://static.wikia.nocookie.net/the-dead-meat/images/9/9e/AshEvilDead2.jpg"
  );
  const [age, setAge] = useState("34");
  const [job, setJob] = useState("Vendeur chez Pribas");
  const [adress, setAdress] = useState("Cabin Wood");
  const [phone, setPhone] = useState("00-435-759-103");
  const [pro, setPro] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
  );
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route
            path="/about"
            element={
              <Profile
                name={name}
                setName={setName}
                pic={pic}
                age={age}
                job={job}
                adress={adress}
                phone={phone}
              />
            }
          />
          <Route path="/experiences" element={<XpPro pro={pro} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
