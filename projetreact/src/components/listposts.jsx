import React from "react";
import Posts from "./posts";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Postpost from "./newpost";

export default function Listposts({ newpost }) {
  const [datas, setDatas] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const getPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((resp) => {
      setDatas(resp.data);
      setLoaded(true);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    let dataswithnewpost = [...datas];
    dataswithnewpost.push(newpost);
    setDatas(dataswithnewpost);
  }, [newpost]);

  let newdatas = [...datas];
  function handleDelete() {
    newdatas.shift();
    setDatas(newdatas);
  }

  return loaded == false ? (
    <div>
      <p>Chargement...</p>
    </div>
  ) : datas === [] || error != null ? (
    <p>Une erreur c'est produite...</p>
  ) : (
    <>
      <div>
        <h1>Liste des Posts</h1>
        <button onClick={handleDelete}>EFFACER</button>
        {datas.map((post) => (
          <Posts postdata={post} key={post.id} />
        ))}
      </div>
    </>
  );
}
