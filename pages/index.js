// @flow
import {Component} from 'react'
import Logo from '../components/logo'

const hasRAF = (ctx): boolean => !!ctx.requestAnimationFrame

export default class Index extends Component {
  state: {
    renderLogo: boolean
  }

  constructor (props: Object) {
    super(props)

    this.state = {
      renderLogo: false
    }
  }

  componentDidMount () {
    if (hasRAF(window)) {
      this.setState({renderLogo: true})
    }
  }

  render () {
    const {renderLogo} = this.state

    return (
      <div>
        <style jsx>{`
          main {
            margin: 1rem;
          }

          h1, p, ul {
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

          .title {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin: 2rem 0;
          }

          .logo-wrapper {
            height: 4rem;
            margin: 0.25rem 0 0 1rem;
            perspective-origin: 50% 50%;
            perspective: 512px;
            width: 8rem;
          }

          @media (min-width: 30rem) {
            main {
              margin: 3rem auto;
              max-width: 30rem;
            }

            h1, p, ul {
              font-size: 1.5rem;
            }

            .logo-wrapper {
              height: 5rem;
              width: 10rem;
            }
          }
        `}</style>
        <main>
          <div className="title">
            <h1>theodor<br />vararu.</h1>
            {renderLogo && <div className="logo-wrapper"><Logo /></div>}
          </div>
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
