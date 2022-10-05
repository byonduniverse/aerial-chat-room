import { Schema, Document, model, Model } from 'mongoose'

const messageSchema = new Schema<iMessage>({
  date: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
})

export interface iMessage extends Document {
  _id: string
  date: Date
  content: string
}

let Message: Model<iMessage> | null = null

export function initialize() {
  Message = model('messages', messageSchema)
}

export function getMessageModel() {
  return Message
}
