import "../styles/globals.css";
import { ThemeProvider, theme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
