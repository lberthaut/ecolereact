import { useState } from "react";
import Input from "./input";

export default function Register() {
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    var options = { year: "numeric", month: "long", day: "numeric" };
    const birthdayFr = new Date(birthday).toLocaleDateString("fr-FR", options);
    const resume = [
      firstName,
      lastName,
      gender,
      email,
      birthdayFr,
      postal,
      city,
    ];
    alert(resume);
  }

  return (
    <div className="register_container">
      <h3>S'enregistrer !</h3>
      <form className="register_form" onSubmit={handleSubmit}>
        <div>
          <Input
            id="Male"
            type="radio"
            name="gender"
            value="male"
            set={setGender}
          />
          <Input
            id="Female"
            type="radio"
            name="gender"
            value="female"
            set={setGender}
          />
        </div>
        <Input id="Prénom" type="text" set={setFirstName} />
        <Input id="Nom" type="text" set={setLastName} />
        <Input id="Email" type="email" set={setEmail} />
        <Input id="Birthday" type="date" set={setBirthday} />
        <Input id="Code Postal" type="number" set={setPostal} />
        <Input id="Ville" type="text" set={setCity} />
        <button className="register_button" type="submit">
          Valider
        </button>
      </form>
    </div>
  );
}
