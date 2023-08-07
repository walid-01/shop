type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  return (
    <div>
      <img
        src={imgUrl}
        alt="store item"
        className="object-cover h-80 w-full rounded-sm"
      />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span>{name}</span>
          <span>${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
