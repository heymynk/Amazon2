// components/PrimeDelivery.js
import Image from "next/image";

export default function PrimeDelivery({ hasPrime }) {
  if (!hasPrime) {
    return null;
  }

  return (
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
  );
}
