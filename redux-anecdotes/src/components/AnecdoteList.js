import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const dispatch = useDispatch()
    const anecdotes = useSelector((state) => {
      if (state.filter === '') {
        return [...state.anecdotes]
      }
      return state.anecdotes.filter(a => a.content.toUpperCase().includes(state.filter.toUpperCase()))
    })

    const vote = (anecdote) => {
        dispatch(voteAnecdote(anecdote.id))
        dispatch(setNotification(`you voted for anecdote: '${anecdote.content}'`, 5))
      }
    
    return (
        <div>
            {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =><div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
      </div>
    )}

export default AnecdoteList

