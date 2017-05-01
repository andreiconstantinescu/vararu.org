// @flow
import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'

type ctx = {
  renderPage: () => {html: Object, head: Object}
}

export default class MyDocument extends Document {
  static getInitialProps ({renderPage}: ctx) {
    const {html, head} = renderPage()
    const styles = flush()
    return {html, head, styles}
  }

  render () {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, minimum-scale=1" />
          <meta name="description" content="Theodor Vararu's website." />
          <meta property="og:title" content="vararu.org" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://vararu.org" />
          <title>theodor vararu. 👓</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
          body {
            color: #111;
            font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue',
              helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;
            margin: 0;
          }
        `}</style>
      </html>
    )
  }
}
