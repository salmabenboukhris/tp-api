import { useState, useEffect } from "react";

function FetchData() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPosts, setShowPosts] = useState(true);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts")

      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur réseau");
        }
        return response.json();
      })

      .then((data) => setPosts(data))

      .catch((err) => setError(err.message))

      .finally(() => setLoading(false));

  }, []);

  if (loading) return <p>Chargement en cours...</p>;

  if (error) return <p>Erreur : {error}</p>;

  return (

    <div>

      <h2>Articles chargés avec fetch()</h2>

      <button onClick={() => setShowPosts(!showPosts)}>
        {showPosts ? "Cacher les articles" : "Afficher les articles"}
      </button>

      {showPosts && (
        <ul>
          {posts.slice(0,5).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}

    </div>

  );
}

export default FetchData;
/*
Explications
useState :
posts contiendra les articles.
loading indique si la requête est en cours.
error indique si une erreur est survenue.
useEffect :
se lance automatiquement quand le composant apparaît.
fetch() fait la requête HTTP.
.then() traite la réponse.
.catch() capture les erreurs.*/
