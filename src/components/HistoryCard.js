import React from "react"

function HistoryCard(props) {
  return (
    <div>
      <h4>Date: {props.checkdate}</h4>
      <h4>Weight: {props.weight}</h4>
      <h4>Bodyfat: {props.bodyfat}</h4>
      <h4>musclemass: {props.musclemass}</h4>
      <h4>Calories: {props.calories}</h4>
      <hr/>
    </div>
  )
}

export default HistoryCard
