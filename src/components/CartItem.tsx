import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import "../styles/CartItem.css";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;
  return (
    <div className="flex items-center gap-3 mb-6">
      <img
        className="object-cover w-1/3 h-24"
        src={item.imgUrl}
        alt="cart item"
      />
      <div className="flex flex-1 items-center justify-between">
        <div>
          <div className="flex gap-2 items-center">
            <h4 className="text-xl font-medium text-zinc-700">{item.name}</h4>
            {quantity > 1 && <p>x{quantity}</p>}
          </div>
          <h4 className="text-zinc-700">{formatCurrency(item.price)}</h4>
        </div>
        <h4 className="text-lg ">{formatCurrency(item.price * quantity)}</h4>
      </div>
      <div
        className="cursor-pointer w-1/12 mx-2"
        onClick={() => removeFromCart(id)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cart-item-svg "
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Edit / Add_Minus_Square">
              <path
                id="Vector"
                d="M8 12H16M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="red-stroke"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CartItem;
