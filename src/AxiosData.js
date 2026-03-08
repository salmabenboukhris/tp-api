import { useState, useEffect } from "react";
import axios from "axios";

function AxiosData() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((response) => {
        setUsers(response.data);
      })

      .catch((err) => {
        setError(err.message);
      })

      .finally(() => {
        setLoading(false);
      });

  }, []);

  if (loading) return <p>Chargement en cours...</p>;

  if (error) return <p>Erreur : {error}</p>;

  return (

    <div>

      <h2>Utilisateurs chargés avec axios</h2>

      <ul>

        {users.map((user) => (

          <li key={user.id}>

            {user.name} – {user.email}

          </li>

        ))}

      </ul>

    </div>

  );
}

export default AxiosData;