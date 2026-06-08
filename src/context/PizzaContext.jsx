import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {

    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas")
            .then((response) => response.json())
            .then((data) => setPizzas(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <PizzaContext.Provider value={{ pizzas }}>
            {children}
        </PizzaContext.Provider>
    );
};

export default PizzaProvider;