import React from 'react'

const notFound = () => {
  return (
    <div className='notfound'>
      <h1 className='notfound__heading'>404 Not Found</h1>

      <p className='notfound__paragraph'>The requested link is either broken or doesn't exist please refresh the page or come back in a few minutes</p>
    </div>
  )
}

export default notFound
