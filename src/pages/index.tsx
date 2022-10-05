/**
 * This is a Next.js page.
 */
import ChatRoom from 'components/ChatRoom'

export default function IndexPage() {
  // 💡 Tip: CMD+Click (or CTRL+Click) on `greeting` to go to the server definition
  return (
    // <div style={styles}>
    //   {/**
    //    * The type is defined and can be autocompleted
    //    * 💡 Tip: Hover over `data` to see the result type
    //    * 💡 Tip: CMD+Click (or CTRL+Click) on `text` to go to the server definition
    //    * 💡 Tip: Secondary click on `text` and "Rename Symbol" to rename it both on the client & server
    //    */}
    //   <h1>{result.data.text}</h1>
    // </div>
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
