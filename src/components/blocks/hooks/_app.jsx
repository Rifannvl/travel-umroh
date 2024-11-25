import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

// _app.js
import { PrimeReactProvider } from "primereact/api";

export default function MyApp({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <Component {...pageProps} />
    </PrimeReactProvider>
  );
}
