import type { AppProps } from "next/app"
import Head from "next/head"

import GlobalStyles from "styles/global"

function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AnyComponent = Component as any
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        {/* <link rel="shortcut icon" href="/" /> */}
        <link rel="manifest" href="manifest.json" />
        <meta
          name="description"
          content="Boilerplate to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <AnyComponent {...pageProps} />
    </>
  )
}

export default App
