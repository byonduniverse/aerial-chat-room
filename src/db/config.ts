export const dbConfig = {
  mongoose: {
    uri:
      process.env.REACT_APP_DATABASE_URL ||
      'mongodb://127.0.0.1:27017/chatroom',
  },
}
