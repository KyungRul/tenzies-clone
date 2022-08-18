import React, {MouseEventHandler} from "react"

export type dieType = {
  id: string
  value: string
  isHeld: boolean
  holdDice: MouseEventHandler
}

export function Die(props: dieType) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  return (
    <div className={"die-face"} style={styles} onClick={props.holdDice}>
      <h2 className={"die-num"}>{props.value}</h2>
    </div>
  )
}