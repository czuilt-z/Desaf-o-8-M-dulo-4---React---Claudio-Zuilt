import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function Cart() {
  const { token } = useContext(UserContext);

  const {
    cart,
    aumentarCantidad,
    disminuirCantidad,
    total,
  } = useContext(CartContext);

  const handleCheckout = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/checkouts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            cart,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Error al procesar la compra"
        );
      }

      alert("✅ Compra realizada con éxito");

      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="Cart-container">
      <h2>Carrito de compras</h2>

      {cart.map((pizza) => (
        <div key={pizza.id} className="cart-item">
          <div className="cart-info">
            <img
              src={pizza.img}
              alt={pizza.name}
            />

            <div className="cart-text">
              <h4>{pizza.name}</h4>

              <p>
                ${pizza.price.toLocaleString("es-CL")}
              </p>
            </div>
          </div>

          <div className="cart-controls">
            <button
              onClick={() =>
                disminuirCantidad(pizza.id)
              }
            >
              -
            </button>

            <span>{pizza.count}</span>

            <button
              onClick={() =>
                aumentarCantidad(pizza.id)
              }
            >
              +
            </button>
          </div>
        </div>
      ))}

      <hr />

      <h3>
        Total:
        ${total.toLocaleString("es-CL")}
      </h3>

      <button
        disabled={!token}
        onClick={handleCheckout}
      >
        Pagar
      </button>
    </div>
  );
}

export default Cart;