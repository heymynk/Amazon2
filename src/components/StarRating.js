// components/StarRating.js
import { StarIcon } from "@heroicons/react/24/solid";

export default function StarRating({ rating }) {
  return (
    <div className="flex justify-center mb-3">
      {Array(rating)
        .fill()
        .map((_, i) => (
          <StarIcon key={i} className="h-5 text-yellow-500" />
        ))}
    </div>
  );
}
