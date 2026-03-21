import { useContext } from 'react'
import NotificationContext from './NotificationContext'

export const useNotification = () => {
  return useContext(NotificationContext)
}

export const useNotificationActions = () => {
  const { dispatch } = useNotification()

  let timeoutId

  const showNotification = (message, seconds = 5) => {
    dispatch({ type: 'SET', payload: message })

    if (timeoutId) clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      dispatch({ type: 'CLEAR' })
    }, seconds * 1000)
  }

  return { showNotification }
}
