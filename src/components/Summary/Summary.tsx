import { monthDifference, months } from '../../utils'
import styles from './Summary.module.scss'

const Summary = ({
  oneTimeAmount,
  startDate,
  endDate,
}: {
  oneTimeAmount?: number
  startDate?: Date
  endDate?: Date
}) => {
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.fullAmountContainer}>
        <div>Total amount</div>
        <div className={styles.fullAmountCounter}>
          $
          {oneTimeAmount && startDate && endDate
            ? (
                Math.round(
                  oneTimeAmount * monthDifference(startDate, endDate) * 100
                ) / 100
              ).toFixed(2)
            : '0'}
        </div>
      </div>
      <div className={styles.banner}>
        You will be sending <strong>${oneTimeAmount}</strong> every month, until{' '}
        <strong>
          {(endDate && months[endDate?.getMonth()]) ?? ''}{' '}
          {endDate?.getFullYear() ?? ''}
        </strong>
        . Thank you!
      </div>
    </div>
  )
}

export default Summary
