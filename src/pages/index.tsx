/**
 * This is a Next.js page.
 */
import ChatRoom from 'components/ChatRoom'

export default function IndexPage() {
  // 💡 Tip: CMD+Click (or CTRL+Click) on `greeting` to go to the server definition
  return (
    <div style={styles}>
      <ChatRoom />
    </div>
  )
}

const styles = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
