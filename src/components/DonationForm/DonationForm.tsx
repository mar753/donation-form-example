import Modal from '../Modal/Modal'
import Input from '../DollarInput/DollarInput'
import styles from './DonationForm.module.scss'
import givingBlock from '/givingBlock_64.svg'
import close from '/close_btn.svg'
import { useState } from 'react'
import Calendar from '../Calendar/Calendar'
import Button from '../Button/Button'
import Summary from '../Summary/Summary'

const DonationForm = () => {
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState<Date>()

  const handleSubmit = () => {
    console.log('Form submitted!', amount, date)
  }

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <img src={close} className={styles.closeIcon} alt="Close" />
          <div className={styles.formHeading}>
            <img src={givingBlock} className="logo" alt="Giving block" />
            <div className={styles.headingText}>
              <h1 className={styles.typographyMobileH2}>The giving block</h1>
              <h3>Set up your donation goal!</h3>
            </div>
          </div>
          <div className={styles.formContent}>
            <div className={styles.inputsContainer}>
              <div>
                <label htmlFor="amount">
                  <h4 className={styles.label}>I can donate</h4>
                </label>
                <Input
                  id="amount"
                  className={styles.input}
                  onChange={setAmount}
                />
              </div>
              <div>
                <label htmlFor="date">
                  <h4 className={styles.label}>Every month until</h4>
                </label>
                <Calendar id="date" onChange={setDate} />
              </div>
            </div>
            <Summary
              oneTimeAmount={Number(amount)}
              startDate={new Date()}
              endDate={date}
            />
            <div className={styles.actions}>
              <Button type="submit" className={styles.continue}>
                Continue
              </Button>
              <Button
                type="button"
                variant="secondary"
                className={styles.cancel}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  )
}
close
export default DonationForm
