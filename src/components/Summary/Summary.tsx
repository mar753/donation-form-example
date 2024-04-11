import { useGenerateTwoNumberVariants } from '../../hooks'
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
  const convert = useGenerateTwoNumberVariants()

  return (
    <div className={styles.summaryContainer}>
      <div className={styles.fullAmountContainer}>
        <div>Total amount</div>
        <div className={styles.fullAmountCounter}>
          $
          {oneTimeAmount && startDate && endDate
            ? convert(
                (oneTimeAmount * monthDifference(startDate, endDate)).toString()
              ).comma
            : '0'}
        </div>
      </div>
      <div className={styles.banner}>
        You will be sending{' '}
        <strong>
          ${oneTimeAmount ? convert(oneTimeAmount?.toString()).comma : '0'}
        </strong>{' '}
        every month, until{' '}
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
