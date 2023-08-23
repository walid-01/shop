import { useShoppingCart } from "../context/ShoppingCartContext";
import "../styles/ShoppingCart.css";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type ShoppingCartBarProps = {
  isOpen: boolean;
};

const ShoppingCartBar = ({ isOpen }: ShoppingCartBarProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <div
      className={`cart-container fixed top-0 left-0 w-full h-screen flex z-10 pointer-events-none ${
        isOpen ? "open" : "closed"
      }`}
    >
      <div
        className={`"bg-green-400 cart-overlay flex-1 " ${
          isOpen ? "pointer-events-auto" : ""
        }`}
        onClick={() => closeCart()}
      ></div>

      <div className="cart-sidebar bg-white shadow-lg w-1/4 p-6 h-screen pointer-events-auto">
        <div className="flex w-full justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Cart</h1>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 cursor-pointer"
            onClick={() => closeCart()}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Menu / Close_LG">
                <path
                  id="Vector"
                  d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Total:</h3>
          <h3>
            {formatCurrency(
              cartItems.reduce((total, item) => {
                return (
                  total +
                  item.quantity *
                    (storeItems.find((i) => i.id == item.id)?.price || 0)
                );
              }, 0)
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartBar;
