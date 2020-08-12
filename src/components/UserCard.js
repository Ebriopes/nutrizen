import React from "react"

function UserCard(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
      <hr/>
    </div>
  )
}

export default UserCard