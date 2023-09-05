import type { AppProps } from "next/app";
import Head from "next/head";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function CustomApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Welcome to ebuy!</title>
      </Head>
      <main>
        <Container style={{ marginTop: "5rem" }}>
          <Component {...pageProps} />
        </Container>
      </main>
    </>
  );
}
export default CustomApp;
