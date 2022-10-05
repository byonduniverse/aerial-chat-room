import { iMessage } from 'db/models/message'
import MessageItem from './MessageItem'

type Props = {
  messages: iMessage[]
}

export default function MessageList({ messages }: Props) {
  return (
    <section className="message-list">
      {messages.map((message: iMessage) => (
        <MessageItem key={message._id} message={message} />
      ))}
    </section>
  )
}
