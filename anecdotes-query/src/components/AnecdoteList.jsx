import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote, deleteAnecdote } from '../requests'
import { useNotificationActions } from '../useNotification'

const AnecdoteList = () => {
  const queryClient = useQueryClient()
  const { showNotification } = useNotificationActions()

  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  })

  const deleteAnecdoteMutation = useMutation({
    mutationFn: deleteAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  })

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
    showNotification(`you voted '${anecdote.content}'`);
  }

  const handleDelete = (anecdote) => {
    if (confirm(`Delete ${anecdote.content}`)){
      deleteAnecdoteMutation.mutate(anecdote.id);
      showNotification(`you deleted '${anecdote.content}'`);
    }
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: false
  })

  if (result.isLoading) {
    return <div>loading data...</div>
  }

  if (result.isError) {
    return <div>anecdote service not available</div>
  }

  const anecdotes = result.data

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
            <button onClick={() => handleDelete(anecdote)}>delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList