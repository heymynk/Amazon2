import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import StarRating from "./StarRating";
import PrimeDelivery from "./PrimeDelivery";
import useProduct from "../app/hooks/useProduct";

export default function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
}) {
  const { rating, hasPrime, exchangeRate } = useProduct();

  if (exchangeRate === null) {
    return <p>Loading...</p>;
  }

  const priceInINR = price * exchangeRate;

  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      <Image src={image} height={150} width={150} objectFit="contain" />

      <div className="col-span-2 space-y-2">
        <p className="my-3 text-xm font-semibold">{title}</p>

        <div className="flex">
          <StarRating rating={rating} />
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>

        <div className="mb-3 text-lg font-bold">
          <CurrencyFormat
            value={Math.floor(priceInINR)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            decimalScale={0}
            fixedDecimalScale={true}
          />
        </div>

        <div className="flex space-x-2 mb-3">
          <PrimeDelivery hasPrime={hasPrime} />
        </div>
      </div>
    </div>
  );
}
