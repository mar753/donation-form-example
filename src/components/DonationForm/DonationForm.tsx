import Modal from '../Modal/Modal'
import Input from '../DollarInput/DollarInput'
import styles from './DonationForm.module.scss'
import givingBlock from '/givingBlock_64.svg'
import close from '/close_btn.svg'
import { useState } from 'react'
import Calendar from '../Calendar/Calendar'

const DonationForm = () => {
  const [amount, setAmount] = useState('')

  const handleSubmit = () => {
    console.log('Form submitted!', amount)
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

            <Calendar />

            {/* <label htmlFor="date">
              <h4 className={styles.label}>Every month until</h4>
            </label>
            <Input id="date" className={styles.input} onChange={setAmount} /> */}
          </div>
        </div>
      </form>
    </Modal>
  )
}
close
export default DonationForm
