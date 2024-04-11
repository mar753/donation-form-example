import { useEffect, useState } from 'react'
import styles from './Calendar.module.scss'
import chevronLeft from '/chevron_left.svg'
import chevronRight from '/chevron_right.svg'
import { getDateOneMonthForward, months } from '../../utils'

const Calendar = ({
  id,
  onChange,
}: {
  id?: string
  onChange?: (value: Date) => void
}) => {
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

  useEffect(() => {
    onChange?.(new Date(selectedDate.getTime()))
  }, [onChange, selectedDate])

  return (
    <div id={id} className={styles.calendarContainer}>
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
