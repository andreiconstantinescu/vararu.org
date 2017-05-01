// @flow
import React from 'react'
import Header from './header'

type props = {
  children?: React$Element<*>
}

export default ({children}: props) => (
  <div className='container'>
    <Header />
    <main>
      {children}
    </main>
    <style jsx>{`
      .container {
        margin: 1rem;
      }

      @media (min-width: 30rem) {
        .container {
          margin: 3rem auto;
          max-width: 30rem;
        }
      }
    `}</style>
  </div>
)
