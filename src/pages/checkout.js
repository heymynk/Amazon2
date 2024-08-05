import Header from "../components/Header";
import Image from "next/image";

import { AuthContextProvider } from "../context/AuthContext";

function Checkout() {
  return (
    <AuthContextProvider>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* left side */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="conatin"
          />
        </div>

        {/* right side  */}
        <div className="flex flex-col p-5 space-y-10 bg-white shadow-sm">
          <h1 className="text-3xl border-b pb-5">Your Sopping Basket</h1>
        </div>
      </main>
    </AuthContextProvider>
  );
}

export default Checkout;
