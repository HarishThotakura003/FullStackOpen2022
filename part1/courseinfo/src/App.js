import React from "react";

const Header =(props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part =(props) => {
  const data = props.data
  return (
    <div>
      <p>{data.name} {data.exercises}</p>
    </div>
  )
}
const Content = (props) => {
  const data = props.data
  return (
    <div>
      <Part data={data[0]} />
      <Part data={data[1]} />
      <Part data={data[2]} />
    </div>
  )
}

const Total =(props) => {
    const data = props.data
    return (
      <p>Number of exercises {data[0].exercises+data[1].exercises+data[2].exercises}</p>
    )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content data={[part1,part2,part3]} />
      <Total data={[part1,part2,part3]} />
    </div>
  )
}

export default App