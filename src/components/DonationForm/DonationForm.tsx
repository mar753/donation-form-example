import Modal from '../Modal/Modal'
import styles from './DonationForm.module.scss'
import givingBlock from '/givingBlock_64.svg'
import close from '/close_btn.svg'

const DonationForm = () => {
  return (
    <Modal>
      <div className={styles.container}>
        <img src={close} className={styles.closeIcon} alt="Close" />
        <div className={styles.formHeading}>
          <img src={givingBlock} className="logo" alt="Giving block" />
          <div className={styles.headingText}>
            <h1 className={styles.typographyMobileH2}>The giving block</h1>
            <h3>Set up your donation goal!</h3>
          </div>
        </div>
        Test
      </div>
    </Modal>
  )
}
close
export default DonationForm
