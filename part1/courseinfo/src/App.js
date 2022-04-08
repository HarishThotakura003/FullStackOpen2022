import React from "react";

const Header =(props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  const data = props.data
  return (
    <div>
      <p>{data[0]} {data[1]}</p>
      <p>{data[2]} {data[3]}</p>
      <p>{data[4]} {data[5]}</p>
    </div>
  )
}

const Total =(props) => {
    const data = props.data
    return (
      <p>Number of exercises {data[0]+data[1]+data[2]}</p>
    )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content data={[part1,exercises1,part2,exercises2,part3,exercises3]} />
      <Total data ={[exercises1,exercises2,exercises3]} />
    </div>
  )
}

export default App