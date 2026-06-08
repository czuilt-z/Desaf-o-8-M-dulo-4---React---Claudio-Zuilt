import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

import CardPizza from "./CardPizza";

function Home() {

  const { pizzas } =
    useContext(PizzaContext);

  return (

    <>

      <h1>Pizzas</h1>

      <div className="Cards-container">

        {pizzas.map((pizza)=>(

          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />

        ))}

      </div>

    </>

  );
}

export default Home;