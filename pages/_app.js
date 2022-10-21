import { GlobalProvider } from "@utils/GlobalContext";
import { appWithTranslation } from 'next-i18next';
import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

// export default MyApp
export default appWithTranslation(MyApp);