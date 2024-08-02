// import { Provider } from "react-redux";
// import { store } from "../app/store";
import "../styles/globals.css";

import { AuthContextProvider } from "../context/AuthContext";


import { SessionProvider } from "next-auth/react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider session = {pageProps.session}>
        <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
