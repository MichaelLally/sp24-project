import React, {useEffect, useState} from 'react'

function Index() {
  
  const [message, setMessage] = useState("Loading")

  const url = process.env.SERVER_URL ? String(process.env.SERVER_URL) : "http://localhost:8080"

  console.log(url)
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