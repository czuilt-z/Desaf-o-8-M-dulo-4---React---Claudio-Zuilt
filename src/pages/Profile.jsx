import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { email, logout } = useContext(UserContext);

  return (
    <>
      <h1>Perfil</h1>

      <p>Email: {email}</p>

      <button
        className="btn btn-danger"
        onClick={logout}
      >
        Cerrar sesión
      </button>
    </>
  );
}

export default Profile;