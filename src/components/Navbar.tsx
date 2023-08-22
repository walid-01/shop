import { useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const [page, setPage] = useState(0);
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div className="shadow-md h-16 mb-3 w-full flex place-content-between items-center px-6 bg-white sticky">
      <ul className="flex content-center items-cente place-content-between">
        <li
          className={page === 0 ? "mr-6 font-medium" : "mr-6"}
          onClick={() => setPage(0)}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={page === 1 ? "mr-6 font-medium" : "mr-6"}
          onClick={() => setPage(1)}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={page === 2 ? "mr-6 font-medium" : "mr-6"}
          onClick={() => setPage(2)}
        >
          <Link to="/store">Store</Link>
        </li>
      </ul>
      {cartQuantity > 0 && (
        <button
          className="w-12 h-12 border-2 border-gray-300 relative"
          onClick={() => openCart()}
        >
          <svg
            fill="#000000"
            viewBox="0 0 24 24"
            id="cart"
            data-name="Flat Line"
            xmlns="http://www.w3.org/2000/svg"
            className="icon flat-line"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <polygon
                id="secondary"
                points="21 7 19 15 8 16 6.62 7 21 7"
                style={{ fill: "#2ca9bc", strokeWidth: 2 }}
              ></polygon>
              <path
                id="primary-upstroke"
                d="M11,20.5h.1m5.9,0h.1"
                style={{
                  fill: "none",
                  stroke: "#000000",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2.5,
                }}
              ></path>
              <path
                id="primary"
                d="M3,3H5.14a1,1,0,0,1,1,.85L6.62,7,8,16l11-1,2-8H6.62"
                style={{
                  fill: "none",
                  stroke: "#000000",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                }}
              ></path>
            </g>
          </svg>
          <div className="bg-red-500 rounded-full text-white w-6 h-6 absolute right-0 bottom-0 translate-x-2 translate-y-2">
            {cartQuantity}
          </div>
        </button>
      )}
    </div>
  );
};

export default Navbar;
