import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "./context/UserContext";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {

  const { token } = useContext(UserContext);

  return (
    <>
      <Navigation />
      <Header />
      <section className='App-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!token ? <LoginForm /> : <Navigate to="/" /> }/>
          <Route path="/register" element={!token ? <RegisterForm /> : <Navigate to="/" /> }/>
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/pizza/p001" element={<Pizza />} /> */}
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/profile" element={token ? <Profile />: <Navigate to="/login" /> }/>
          



          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      <Footer />
    </>
  )
}

export default App
