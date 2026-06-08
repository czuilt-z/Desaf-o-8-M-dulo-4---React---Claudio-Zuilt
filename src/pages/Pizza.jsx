import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Pizza() {

  const [pizza, setPizza] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getPizza();
  }, [id]);

  const getPizza = async () => {

    try {

      const response = await fetch(
        `http://localhost:5000/api/pizzas/${id}`
      );

      const data = await response.json();

      setPizza(data);

    } catch (error) {

      console.error(
        "Error al obtener la pizza:",
        error
      );

    }

  };

  if (!pizza) {

    return (
      <h1 className="text-center mt-5">
        Cargando pizza...
      </h1>
    );

  }

  return (

    <div className="d-flex justify-content-center">

      <Card
        className="pizza-card"
        style={{ width: "25rem" }}
      >

        <Card.Img
          variant="top"
          src={pizza.img}
          alt={pizza.name}
        />

        <Card.Body>

          <Card.Title>
            Pizza {pizza.name}
          </Card.Title>

          <hr />

          <Card.Text>
            {pizza.desc}
          </Card.Text>

          <p className="text-center">
            <strong>
              Ingredientes:
            </strong>
          </p>

          <ul className="ingredients">

            {pizza.ingredients.map(
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
            ${pizza.price.toLocaleString("es-CL")}

          </p>

          <div className="buttons">

            <Button
              variant="dark"
              size="sm"
            >
              Agregar 🛒
            </Button>

          </div>

        </Card.Body>

      </Card>

    </div>

  );

}

export default Pizza;
