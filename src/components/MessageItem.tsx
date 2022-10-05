import { iMessage } from 'db/models/message'
import { formatDate } from 'utils/date'

type Props = {
  message: iMessage
}

export default function MessageItem({ message }: Props) {
  return (
    <div className="message-item">
      <div className="message-item__text">{message.content}</div>
      <div className="message-item__date">{formatDate(message.date)}</div>
    </div>
  )
}
