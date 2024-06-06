import { useState } from 'react'

const Header = ()=> { 
  return(
  <h1>give feedback</h1>
  )
}
const Statistics = (props) =>{
  if (props.total == 0){
    return (
      <>
      <h2>statistics</h2>
      <p>No feedback given</p> 
      </>)
  }else{
    return(
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine text = "good" value = {props.good}/>
            <StatisticLine text = "neutral" value = {props.neutral}/> 
            <StatisticLine text = "bad" value = {props.bad}/> 
            <StatisticLine text = "all" value = {props.total}/> 
            <StatisticLine text = "average" value = {(props.good-props.bad)/props.total}/> 
            <StatisticLine text = "positive" value = {(props.good/props.total)*100}/> 
          </tbody>
        </table>
      </div>
    ) 
  }
}
const StatisticLine = (props)=>{ 
  if (props.text ==  "positive"){ 
    return (<tr><td>{props.text}</td><td>{props.value}%</td></tr>)
  }
  return (<tr><td>{props.text}</td><td>{props.value}</td></tr>)
}

const Button = (props)=>{ 
  return (
    <button onClick = {props.handleClick}>{props.text}</button>
  )
}

const  App = ()=> {
  const [good, setGood] = useState(0)
  const [bad,setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [total, setTotal] = useState(0)

  const updateGood = ()=> { 
    const newGood = good +  1
    setGood(newGood)
    setTotal(newGood + bad + neutral )
  }
  const updateBad = ()=> { 
    const newBad = bad + 1 
    setBad(newBad)
    setTotal(newBad + good + neutral )
  }

  const updateNeutral = ()=> { 
    const newNeutral = neutral + 1 
    setNeutral(newNeutral)
    setTotal(newNeutral + good + bad )
  }

  return (
    <div>
      <Header/>
      <Button handleClick = {updateGood} text = "good"/>
      <Button handleClick = {updateNeutral} text = "neutral"/>
      <Button handleClick = {updateBad} text = "bad"/>
      <Statistics good = {good} bad = {bad} neutral = {neutral} total = {total}/>
    </div>
  )
}

export default App
