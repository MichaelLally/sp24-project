import React, {useEffect, useState} from 'react'

function Index() {
  
  const [message, setMessage] = useState("Loading")

  if(process.env.SERVER_URL) {
    const url = process.env.SERVER_URL // prod
  } else {
    const url = "http://localhost:8080" // local
  }

  useEffect(() => {
    fetch(url + "/api/home").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setMessage(data.message)
      }
    )
  }, [])

  return (
    <div>
      <div>Return message</div>
      <div>{message}</div>
    </div>
  )
}

export default Index