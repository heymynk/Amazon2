import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchExchangeRate} from "../../slices/exchangeRateSlice"
const MAX_RATING = 5;
const MIN_RATING = 1;

export default function useProduct() {
  const [rating, setRating] = useState(0);
  const [hasPrime, setHasPrime] = useState(false);
  const dispatch = useDispatch();
  const exchangeRate = useSelector((state) => state.exchangeRate.rate);

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setHasPrime(Math.random() < 0.5);
    dispatch(fetchExchangeRate());
  }, [dispatch]);

  return { rating, hasPrime, exchangeRate };
}
