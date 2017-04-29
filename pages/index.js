// @flow
import {Component} from 'react'
import Header from '../components/header'

export default class Index extends Component {
  render () {
    return (
      <div>
        <style jsx>{`
          main {
            margin: 1rem;
          }

          p, ul {
            font-size: 1.25rem;
          }

          p {
            margin: 3rem 0;
          }

          ul {
            list-style-type: none;
            padding: 0;
          }

          li {
            margin: 1rem 0;
          }

          @media (min-width: 30rem) {
            main {
              margin: 3rem auto;
              max-width: 30rem;
            }

            p, ul {
              font-size: 1.5rem;
            }
          }
        `}</style>
        <main>
          <Header />
          <p>
            Theo is a JavaScript developer interested in accessibility, Node.js, and React.js.
          </p>
          <ul>
            <li>
              Email:
              {' '}
              <a href="mailto:theo@vararu.org">theo@vararu.org</a>
            </li>
            <li>
              Blog:
              {' '}
              <a href="https://blog.vararu.org">blog.vararu.org</a>
            </li>
            <li>
              Résumé:
              {' '}
              <a href="https://vararu.org/cv/">vararu.org/cv/</a>
            </li>
            <li>
              GitHub:
              {' '}
              <a href="https://github.com/tvararu">github.com/tvararu</a>
            </li>
            <li>
              Twitter:
              {' '}
              <a href="https://twitter.com/tvararu">twitter.com/tvararu</a>
            </li>
          </ul>
        </main>
      </div>
    )
  }
}
