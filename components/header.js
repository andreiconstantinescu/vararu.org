// @flow
import {Component} from 'react'
import Link from 'next/link'
import Logo from './logo'

const hasRAF = (ctx): boolean => !!ctx.requestAnimationFrame

export default class Header extends Component {
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
      <header>
        <style jsx>{`
          header, .logo {
            height: 4rem;
            font-weight: bold;
          }

          header {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin: 2rem 0;
          }

          p, a {
            color: currentColor;
            font-size: 1.25rem;
          }

          .logo {
            perspective-origin: 50% 50%;
            perspective: 512px;
            width: 8rem;
          }

          @media (min-width: 30rem) {
            header, .logo {
              height: 5rem;
            }

            p, a {
              font-size: 1.5rem;
            }

            .logo {
              width: 10rem;
            }
          }
        `}</style>
        <p>theodor<br /><Link href="/" prefetch><a>vararu.org</a></Link></p>
        {renderLogo && <div className="logo"><Logo /></div>}
      </header>
    )
  }
}
