import { useState } from 'react'

const MostVotes = (props)=>{
  let maxIndex = (props.votes).indexOf(Math.max(...props.votes))
  const maxValue = Math.max(...props.votes)
  return(
    <div>
      <h2>Anecdote with the most votes</h2>
      {props.anecdotes[maxIndex]}
      <p>has {maxValue} votes</p>
    </div>
  )

}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [votes, setVote] = useState(new Array(8).fill(0))
  const [selected, setSelected] = useState(0)
  const nextAnecdote = ()=>{ 
    const index = Math.floor(Math.random() * (Math.floor(anecdotes.length-1) + 1))
    setSelected(index)
  }

  const addVote = () =>{ 
    const newVotes = [...votes]
    newVotes[selected] += 1
    console.log(votes)
    setVote(newVotes)
  }
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes </p>
      <button onClick = {nextAnecdote}>next anecdote</button>
      <button onClick = {addVote}>vote</button>
      <MostVotes anecdotes = {anecdotes} votes = {votes}/>
    </div>
  )
}

export default App