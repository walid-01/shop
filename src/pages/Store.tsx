import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <ul className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {storeItems.map((item) => (
          <li key={item.id}>
            <StoreItem {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Store;
