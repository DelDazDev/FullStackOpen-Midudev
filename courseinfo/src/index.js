import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const saludo = "Holita Gualtrapillas"
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Saludo = ({ saludo }) => <h2>{saludo}</h2>

  const Title = (props) => {
    return <h1>{props.course}</h1>
  }

  return (
    <div>
      <Saludo saludo={saludo} />
      <Title course={course} />
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))