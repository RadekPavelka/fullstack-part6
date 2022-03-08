import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
/*     createAnecdote(state, action) {
      state.push(action.payload)
    }, */
/*     voteAnecdote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      const votedAnecdote = {
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : votedAnecdote)
    }, */
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    updateAnecdote(state, action) {
      const updatedAnecdote = action.payload
      return state.map(anecdote => anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote)
    }
  }
})

export const { appendAnecdote, setAnecdotes, updateAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.get(id)
    const updatedAnecdote = await anecdoteService.update(id, {...votedAnecdote, votes: votedAnecdote.votes + 1})
    dispatch(updateAnecdote(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer