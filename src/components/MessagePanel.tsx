import React, { useState } from 'react'

type Props = {
  onSend: (content: string) => void
}

export default function MessagePanel({ onSend }: Props) {
  const [message, setMessage] = useState('')

  function handleChangeMessage(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value)
  }

  function handleSend(e: React.FormEvent) {
    e.preventDefault()

    onSend(message)
  }

  return (
    <form onSubmit={handleSend} className="message-panel">
      <input
        className="message-panel__input"
        value={message}
        onChange={handleChangeMessage}
      />
      <button type="submit" className="message-panel__button">
        SEND
      </button>
    </form>
  )
}
