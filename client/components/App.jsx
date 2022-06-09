import React, { useState } from 'react'

const App = () => {
  const altText = [
    'A unicorn with an uninflated balloon instead of a horn',
    'A unicorn with a slightly inflated balloon instead of a horn',
    'A unicorn with a mostly inflated balloon instead of a horn',
    'A unicorn with a fully inflated balloon instead of a horn'
  ]

  const [unicornLevels, setUnicornLevels] = useState([0, 0, 0])

  function increase (unicornInflationLevel) {
    if (unicornInflationLevel === 3) return 0
    return unicornInflationLevel + 1
  }

  function onClick (index) {
    const newUnicorns = unicornLevels.map((unicornInflationLevel, i) => {
      if (i === index) {
        return increase(unicornInflationLevel)
      } else {
        return unicornInflationLevel
      }
    })
    setUnicornLevels(newUnicorns)
    let sound = new Audio('/sounds/sfx-boing10.mp3')
    sound.play()
  }

  return (
    <>
      <h1> JS CARNIVAL: Inflate The Unicorn! </h1>
      <div className="container">
        {unicornLevels.map((unicornInflationLevel, i) => {
          return <img key={`unicorn${i}`} className="inflate-an-image" src={`/images/unicorn-${unicornInflationLevel}.png`} alt={altText[unicornInflationLevel]} onClick={() => onClick(i)}/>
        })}
      </div>
    </>
  )
}

export default App
