import Header from "../components/Header";
import Image from "next/image";
import { AuthContextProvider } from "../context/AuthContext";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";

function Checkout() {
  const items = useSelector(selectItems);
  
  return (
    <AuthContextProvider>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Left side */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
            className="justify-center"
          />
        </div>
        {/* Right side */}
        <div className="flex flex-col p-5 space-y-10 bg-white shadow-sm">
          <h1 className="text-3xl border-b pb-5">
            {items.length === 0 ? "Your Shopping Cart Is Empty" : "Shopping Cart"}
          </h1>
          {items.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating} 
              description={item.description}
              category={item.category} 
              image={item.image}
              hasPrime={item.hasPrime}
            />
          ))}
        </div>
      </main>
    </AuthContextProvider>
  );
}

export default Checkout;
