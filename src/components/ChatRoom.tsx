import { useState, useEffect } from 'react'
import { trpc } from 'utils/trpc'
import MessageList from './MessageList'
import MessagePanel from './MessagePanel'
import { iMessage } from 'db/models/message'

export default function ChatRoom() {
  const { data: fetchedMessages } = trpc.messages.useQuery()
  const [messages, setMessages] = useState<iMessage[]>([])
  const mutation = trpc.addMessage.useMutation()

  useEffect(() => {
    setMessages(fetchedMessages as iMessage[])
  }, [fetchedMessages])

  function handleSend(message: string) {
    mutation.mutate(
      { content: message },
      {
        onSuccess: (data) => {
          if (data) setMessages([...messages, data])
        },
      }
    )
  }

  if (!fetchedMessages) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="chat-room">
      <MessageList messages={messages} />
      <MessagePanel onSend={handleSend} />
    </div>
  )
}
