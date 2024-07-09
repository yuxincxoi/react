import { useState, useEffect } from "react";

function Hello() {
  /* 같은 코드
  useEffect(() => {
    console.log("created :)")
    return () => console.log("bye :(")
  }, [])
  return <h1>Hello</h1>
  */

  function byFn() {
    console.log("bye :(")
  }
  function hiFn() {
    console.log("created :)")
    return byFn
  }
  useEffect(hiFn, [])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App;
