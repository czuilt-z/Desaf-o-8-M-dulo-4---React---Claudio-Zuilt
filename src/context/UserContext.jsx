import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");

  const login = async (email, password) => {
    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al iniciar sesión");
    }

    setToken(data.token);
    setEmail(data.email);
  };

  const register = async (email, password) => {
    const response = await fetch(
      "http://localhost:5000/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al registrar usuario");
    }

    setToken(data.token);
    setEmail(data.email);
  };

  const getProfile = async () => {
    const response = await fetch(
      "http://localhost:5000/api/auth/me",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al obtener perfil");
    }

    setEmail(data.email);

    return data;
  };

  const logout = () => {
    setToken(null);
    setEmail("");
  };

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        getProfile,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;