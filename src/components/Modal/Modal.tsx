import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'

const wrapperId = 'portal-root'

function Modal({
  children,
}: {
  children: React.ReactElement
}): React.ReactElement | null {
  return document.getElementById(wrapperId)
    ? createPortal(
        <div className={styles.container}>{children}</div>,
        document.getElementById(wrapperId) as HTMLElement
      )
    : null
}

export default Modal
