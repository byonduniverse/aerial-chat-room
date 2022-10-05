export const dbConfig = {
  mongoose: {
    uri:
      process.env.REACT_APP_DATABASE_URL ||
      'mongodb+srv://root:akubO3WozJNkVaEb@chat.o7uxt5z.mongodb.net/chatroom',
  },
}
