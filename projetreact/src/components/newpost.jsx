import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Input from "./input";

export default function Postpost({ setNewpost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const postAxios = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        body: body,
      })
      .then((response) => {
        setNewpost(response.data);
        console.log("new post", response.data);
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    postAxios();
  }
  return (
    <>
      <h2>Nouveau Post</h2>
      <form className="post_form" onSubmit={handleSubmit}>
        <Input id="title" type="text" set={setTitle} />
        <Input id="body" type="text" set={setBody} />
        <button type="submit" className="register_button">
          Envoyer !
        </button>
      </form>
    </>
  );
}
