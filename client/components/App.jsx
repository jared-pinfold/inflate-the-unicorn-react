import React, { useState } from 'react'

const App = () => {
  const altText = [
    'A unicorn with an unflated ballon instead of a horn',
    'A unicorn with a slightly inflated ballon instead of a horn',
    'A unicorn with a mostly inflated ballon instead of a horn',
    'A unicorn with a fully inflated ballon instead of a horn'
  ]

  const [unicorns, setUnicorns] = useState([0, 0, 0])

  function increase (unicornInflationLevel) {
    if (unicornInflationLevel === 3) return 0
    return unicornInflationLevel + 1
  }

  function onClick (index) {
    const newUnicorns = unicorns.map((unicornInflationLevel, i) => {
      if (i === index) {
        return increase(unicornInflationLevel)
      } else {
        return unicornInflationLevel
      }
    })
    setUnicorns(newUnicorns)
    let sound = new Audio('/sounds/sfx-boing10.mp3')
    sound.play()
  }

  return (
    <>
      <h1> JS CARNIVAL: Inflate The Unicorn! </h1>
      <div className="container">
        {unicorns.map((unicornInflationLevel, i) => {
          return <img key={`unicorn${i}`} className="inflate-an-image" src={`/images/unicorn-${unicornInflationLevel}.png`} alttext={altText[unicornInflationLevel]} onClick={() => onClick(i)}/>
        })}
      </div>
    </>
  )
}

export default App
