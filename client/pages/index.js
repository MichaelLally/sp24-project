import React, {useEffect, useState} from 'react'

function Index() {
  
  const [message, setMessage] = useState("Loading")
  
  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(
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