import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function Navigation() {
  const { total } = useContext(CartContext);

  const { token, email, logout } = useContext(UserContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
        >
          Mamma Mia
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link
            as={Link}
            to="/"
          >
            🍕 Home
          </Nav.Link>

          {token ? (
            <>
              <Nav.Link
                as={Link}
                to="/profile"
              >
                👤 Profile
              </Nav.Link>

              <Nav.Link onClick={logout}>
                🔓 Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link
                as={Link}
                to="/login"
              >
                🔐 Login
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/register"
              >
                📝 Register
              </Nav.Link>
            </>
          )}

          <Nav.Link
            as={Link}
            to="/cart"
          >
            🛒 Total: ${total.toLocaleString("es-CL")}
          </Nav.Link>
        </Nav>

        {token && (
          <Navbar.Text>
            👋 {email}
          </Navbar.Text>
        )}
      </Container>
    </Navbar>
  );
}

export default Navigation;