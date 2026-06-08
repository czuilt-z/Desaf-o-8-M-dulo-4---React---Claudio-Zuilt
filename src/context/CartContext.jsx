import { createContext, useState } from "react";
import { pizzaCart } from "../data/pizzas";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(pizzaCart);

    const agregarAlCarrito = (producto) => {

        const existe = cart.find(
            pizza => pizza.id === producto.id
        );

        if (existe) {

            setCart(
                cart.map((pizza) =>
                    pizza.id === producto.id
                        ? {
                            ...pizza,
                            count: pizza.count + 1
                        }
                        : pizza
                )
            );

        } else {

            setCart([
                ...cart,
                {
                    ...producto,
                    count: 1
                }
            ]);
        }
    };

    const aumentarCantidad = (id) => {
        setCart(
            cart.map((pizza) =>
                pizza.id === id
                    ? { ...pizza, count: pizza.count + 1 }
                    : pizza
            )
        );
    };

    const disminuirCantidad = (id) => {
        setCart(
            cart
                .map((pizza) =>
                    pizza.id === id
                        ? { ...pizza, count: pizza.count - 1 }
                        : pizza
                )
                .filter((pizza) => pizza.count > 0)
        );
    };

    const total = cart.reduce(
        (acc, pizza) => acc + pizza.price * pizza.count,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                total,
                agregarAlCarrito,
                aumentarCantidad,
                disminuirCantidad
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;