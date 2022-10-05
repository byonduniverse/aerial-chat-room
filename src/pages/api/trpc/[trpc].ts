/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import { initTRPC } from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { z } from 'zod'
import { bootstrap, getMessages, addMessage } from 'db'

// bootstrap db service
bootstrap()

const t = initTRPC.create()

const appRouter = t.router({
  messages: t.procedure.query(async () => {
    const messages = await getMessages()
    return messages
  }),
  addMessage: t.procedure
    .input(
      z.object({
        content: z.string(),
      })
    )
    .mutation(async (req) => {
      const message = await addMessage(req.input.content)
      return message
    }),
  // 💡 Tip: Try adding a new procedure here and see if you can use it in the client!
  // getUser: t.procedure.query(() => {
  //   return { id: '1', name: 'bob' };
  // }),
})

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
})
