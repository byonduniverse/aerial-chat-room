import { format } from 'date-fns'

export function formatDate(date: Date) {
  let factor = 24 * 60 * 60 * 1000
  let diff = new Date().getTime() - new Date(date).getTime()

  const days = Math.floor(diff / factor)

  if (days > 7) {
    return format(date, 'MM/dd/yyyy')
  }

  diff = diff % factor
  factor = factor / 24

  const hours = Math.floor(diff / factor)

  diff = diff % factor
  factor = factor / 60

  const minutes = Math.floor(diff / factor)

  diff = diff % factor
  factor = factor / 60

  const seconds = Math.floor(diff / factor)

  return (
    (days ? `${days} ${days > 0 ? 'days' : 'day'} ` : '') +
    (hours ? `${hours} ${hours > 0 ? 'hours' : 'hour'} ` : '') +
    (minutes ? `${minutes} ${minutes > 0 ? 'minutes' : 'minute'} ` : '') +
    `${seconds} ${seconds > 0 ? 'seconds' : 'second'} ` +
    ' ago'
  )
}
