import { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { CartContext } from "../context/CartContext";

function CardPizza({
  id,
  name,
  price,
  ingredients,
  img,
}) {
  const { agregarAlCarrito } =
    useContext(CartContext);

  const pizza = {
    id,
    name,
    price,
    ingredients,
    img,
  };

  return (
    <Card className="pizza-card">

      <Card.Img
        variant="top"
        src={img}
        alt={name}
      />

      <Card.Body>

        <Card.Title>
          Pizza {name}
        </Card.Title>

        <hr />

        <p className="text-center">
          <strong>Ingredientes:</strong>
        </p>

        <ul className="ingredients">

          {ingredients.map(
            (ingredient, index) => (
              <li key={index}>
                🍕 {ingredient}
              </li>
            )
          )}

        </ul>

        <hr />

        <p className="price">
          Precio:
          ${price.toLocaleString("es-CL")}
        </p>

        <div className="buttons">

          <Button
            as={Link}
            to={"/pizza/${id}"}
            variant="outline-dark"
            size="sm"
          >
            Ver Más 👀
          </Button>

          <Button
            variant="dark"
            size="sm"
            onClick={() =>
              agregarAlCarrito(pizza)
            }
          >
            Agregar 🛒
          </Button>

        </div>

      </Card.Body>

    </Card>
  );
}

export default CardPizza;
