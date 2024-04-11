import { useState } from 'react'
import styles from './Calendar.module.scss'
import chevronLeft from '/chevron_left.svg'
import chevronRight from '/chevron_right.svg'

const months = [
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

const getDateOneMonthForward = () => {
  const date = new Date()
  date.setMonth(date.getMonth() + 1)
  return date
}

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(getDateOneMonthForward())

  const handleOneMonthEarlier = () => {
    const selectedDateCopy = new Date(selectedDate.getTime())
    selectedDateCopy.setMonth(selectedDateCopy.getMonth() - 1)
    if (selectedDateCopy > new Date()) {
      setSelectedDate(selectedDateCopy)
    }
  }

  const handleOneMonthLater = () => {
    const selectedDateCopy = new Date(selectedDate.getTime())
    selectedDateCopy.setMonth(selectedDateCopy.getMonth() + 1)
    setSelectedDate(selectedDateCopy)
  }

  console.log(selectedDate.getMonth())

  return (
    <div className={styles.calendarContainer}>
      <img
        className={styles.chevronLeft}
        src={chevronLeft}
        onClick={handleOneMonthEarlier}
        alt="cl"
      />
      <div className={styles.dateContainer}>
        <div className={styles.monthTypography}>
          {months[selectedDate.getMonth()]}
        </div>
        <div className={styles.yearTypography}>
          {selectedDate.getFullYear()}
        </div>
      </div>
      <img
        className={styles.chevronRight}
        onClick={handleOneMonthLater}
        src={chevronRight}
        alt="cr"
      />
    </div>
  )
}

export default Calendar
