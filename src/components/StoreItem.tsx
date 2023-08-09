import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className="bg-white rounded-md border h-full">
      <img
        src={imgUrl}
        alt="store item"
        className="object-cover h-80 w-full rounded-sm"
      />
      <div className="flex flex-col p-3 gap-2">
        <div className="flex justify-between">
          <span className="font-medium text-xl">{name}</span>
          <span className="text-zinc-500 font-medium">
            {formatCurrency(price)}
          </span>
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button
              className="bg-blue-500 p-1 w-full rounded-sm text-white hover:bg-blue-600"
              onClick={() => increaseQuantity(id)}
            >
              + Add to Cart
            </button>
          ) : (
            <div className="flex gap-3 flex-col items-center">
              <div className="flex flex-row gap-4 items-center">
                <button
                  className="bg-blue-500 w-9 h-9 rounded-sm text-white hover:bg-blue-600"
                  onClick={() => decreaseQuantity(id)}
                >
                  -
                </button>
                <p className="text-lg">
                  <span className="font-semibold text-2xl">{quantity}</span> in
                  cart
                </p>
                <button
                  className="bg-blue-500 w-9 h-9 rounded-sm text-white hover:bg-blue-600"
                  onClick={() => increaseQuantity(id)}
                >
                  +
                </button>
              </div>
              <div>
                <button
                  className="bg-red-500 px-4 py-2 rounded-sm text-white hover:bg-red-600"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
