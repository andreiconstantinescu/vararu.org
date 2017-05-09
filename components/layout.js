// @flow
import React from 'react'
import cs from 'classnames'
import Header from './header'

type props = {
  children?: React$Element<*>,
  wide?: Boolean
}

export default ({children, wide}: props) => (
  <div className={cs('container', {wide, slim: !wide})}>
    <Header />
    <main>
      {children}
    </main>
    <style jsx>{`
      .container {
        margin: 1rem;
      }

      @media (min-width: 30rem) {
        .slim {
          margin: 3rem auto;
          max-width: 30rem;
        }
      }

      @media (min-width: 45rem) {
        .wide {
          margin: 3rem auto;
          max-width: 45rem;
        }
      }
    `}</style>
  </div>
)
