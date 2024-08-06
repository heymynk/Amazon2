import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import StarRating from "./StarRating";
import PrimeDelivery from "./PrimeDelivery";
import useProduct from "../app/hooks/useProduct";
export default function Product({
  id,
  title,
  price,
  description,
  category,
  image,
}) {
  const { rating, hasPrime, exchangeRate } = useProduct();
  const dispatch = useDispatch();

  if (exchangeRate === null) {
    return <p>Loading...</p>;
  }

  const priceInINR = price * exchangeRate;

  const addItemToBasket = () => {
    const product = { id, title, price, description, category, image };
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out p-4 m-2">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <div className="flex-1 flex items-center justify-center mb-2">
        <Image
          src={image}
          height={200}
          width={200}
          objectFit="contain"
          alt="Loading..."
        />
      </div>

      <h4 className="my-3 text-xm font-semibold text-center">{title}</h4>

      <StarRating rating={rating} />


      <p className="text-xs mb-3 text-center line-clamp-2">{description}</p>

      <div className="mb-3 text-lg font-bold text-center">
        <CurrencyFormat
          value={Math.floor(priceInINR)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
          decimalScale={0}
          fixedDecimalScale={true}
        />
      </div>

      <PrimeDelivery hasPrime={hasPrime} />

      <button
        onClick={addItemToBasket}
        className="mt-auto button w-full py-2 text-white bg-yellow-400 rounded-lg hover:bg-yellow-500"
      >
        Add To Cart
      </button>
    </div>
  );
}
