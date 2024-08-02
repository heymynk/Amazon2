import { useState, useEffect } from "react";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import { StarIcon } from "@heroicons/react/24/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;

export default function Product({
  id,
  title,
  price,
  description,
  category,
  image,
}) {
  const [rating, setRating] = useState(0);
  const [hasPrime, setHasPrime] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setHasPrime(Math.random() < 0.5);

    // Fetch the exchange rate from USD to INR
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((data) => {
        setExchangeRate(data.rates.INR);
      });
  }, []);

  if (exchangeRate === null) {
    return <p>Loading...</p>;
  }

  const priceInINR = price * exchangeRate;

  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out p-4 m-2">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <div className="flex-1 flex items-center justify-center mb-2">
        <Image
          src={image}
          height={120}
          width={120}
          objectFit="contain"
          alt="Loading..."
        />
      </div>

      <h4 className="my-3 text-xm font-semibold text-center">{title}</h4>

      <div className="flex justify-center mb-3">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

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

      {hasPrime && (
        <div className="flex items-center space-x-2 mb-3 justify-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png"
            alt="Prime Delivery"
            width={40}
            height={50}
            objectFit="contain"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button w-full py-2 text-white bg-yellow-400 rounded-lg hover:bg-yellow-500">
        Add To Cart
      </button>
    </div>
  );
}
