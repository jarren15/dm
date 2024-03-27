import React from 'react'
import Header from './Header'

export const Layout = ({children, location}) => {
  return (
    <>
        <Header location={location} />
        <main className='leading-loose'>
            {children}
        </main>
    </>
  )
}
