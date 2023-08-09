import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

const Store = () => {
  return (
    <div className="px-8">
      <h1 className="text-3xl font-semibold pb-3">Store</h1>
      <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {storeItems.map((item) => (
          <li key={item.id}>
            <StoreItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Store;
