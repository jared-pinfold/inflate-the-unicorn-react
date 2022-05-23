import React, {useState, useEffect} from 'react'
import {getGreeting} from '../apiClient'

const App = () => {

  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    getGreeting()
      .then((greeting) => {
        console.log(greeting)
        setGreeting(greeting)
      })
  }, [count])

  return (
    <>
      <h1> JS CARNIVAL: Inflate The Unicorn! </h1>
		  <div className="container">
			  <img className="inflate-an-image" src="/images/waiting-for-photo.png" />
			  <img className="inflate-an-image" src="/images/waiting-for-photo.png" />
			  <img className="inflate-an-image" src="/images/waiting-for-photo.png" />
		  </div>
    </>
  )

}

export default App


// <!doctype html>
// <html lang="en">
// 	<head>
// 		<meta charset="utf-8">
// 		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1">
// 		<title>JS CARNIVAL: Inflate The Unicorn!</title>
// 		<link href="https://fonts.googleapis.com/css?family=Rye&display=swap" rel="stylesheet">
// 		<link rel="stylesheet" href="../main.css">
// 	</head>
// 	<body>

// 		<h1> JS CARNIVAL: Inflate The Unicorn! </h1>

// 		<div class="container">
// 			<img class="inflate-an-image" src="./images/waiting-for-photo.png" >
// 			<img class="inflate-an-image" src="./images/waiting-for-photo.png" >
// 			<img class="inflate-an-image" src="./images/waiting-for-photo.png" >
// 		</div>

// 		<script src="inflate-the-unicorn.js"></script>
// 	</body>

// </html>