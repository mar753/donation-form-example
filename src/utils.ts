export const monthDifference = (dateFrom: Date, dateTo: Date) =>
  dateTo.getMonth() -
  dateFrom.getMonth() +
  12 * (dateTo.getFullYear() - dateFrom.getFullYear())

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const getDateOneMonthForward = () => {
  const date = new Date()
  date.setMonth(date.getMonth() + 1)
  return date
}
