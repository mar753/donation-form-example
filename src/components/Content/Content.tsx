import DonationForm from '../DonationForm/DonationForm'
import styles from './Content.module.scss'

const Content = () => {
  return (
    <div className={styles.container}>
      <DonationForm />
    </div>
  )
}

export default Content
