import mongoose, { Model } from 'mongoose'
import { dbConfig } from './config'
import { getMessageModel, initialize } from './models/message'

let connectionError: string | null = null
let bootstrapped = false
// let messageModel: Model<iMessage> | null = null
export function bootstrap() {
  if (bootstrapped) return

  mongoose
    .connect(dbConfig.mongoose.uri)
    .then(() => {
      console.log('Connected to MongoDB')
      bootstrapped = true
      initialize()
      // messageModel = require('./models/message').default
    })
    .catch((err) => {
      console.log('Connect error:', err)
      connectionError = err
    })
}

export function getMessages() {
  const messageModel = getMessageModel()

  if (!messageModel) return []

  return messageModel.find({})
}

export function addMessage(content: string) {
  const messageModel = getMessageModel()

  if (!messageModel) return null

  return messageModel.create({
    date: new Date(),
    content,
  })
}

// export default client
