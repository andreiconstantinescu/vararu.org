import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, minimum-scale=1' />
      <meta name='description' content="Theodor Vararu's website." />
      <meta property='og:title' content='vararu.org' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://vararu.org' />
      <title>👓 vararu.org</title>
    </Head>
    <style jsx>{`
      main {
        font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;
        margin: 0.5rem;
      }

      @media (min-width: 30rem) {
        main {
          margin: 2.5rem;
          max-width: 30rem;
        }
      }

      h1, p, ul {
        font-size: 1.5rem;
      }

      h1, li {
        margin: 1rem 0;
      }

      p {
        margin: 5rem 0 5rem;
      }

      ul {
        list-style-type: none;
        padding: 0;
      }
    `}</style>
    <main>
      <h1>theodor vararu.</h1>
      <p>Theo is a JavaScript developer interested in accessibility, Node.js, and React.js.</p>
      <ul>
        <li>Email: <a href='mailto:theo@vararu.org'>theo@vararu.org</a></li>
        <li>Blog: <a href='https://blog.vararu.org'>blog.vararu.org</a></li>
        <li>Résumé: <a href='https://vararu.org/cv/'>vararu.org/cv/</a></li>
        <li>GitHub: <a href='https://github.com/tvararu'>github.com/tvararu</a></li>
        <li>Twitter: <a href='https://twitter.com/tvararu'>twitter.com/tvararu</a></li>
      </ul>
    </main>
  </div>
)
