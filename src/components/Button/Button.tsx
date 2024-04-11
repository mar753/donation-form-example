import { ReactElement, SyntheticEvent } from 'react'
import styles from './Button.module.scss'

const Button = ({
  children,
  type,
  variant,
  className,
  onClick,
}: {
  children?: ReactElement | string
  type?: 'submit' | 'reset' | 'button'
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: (event: SyntheticEvent) => void
}) => {
  return variant === 'secondary' ? (
    <button
      type={type}
      className={`${styles.buttonSecondary}${className ? ` ${className}` : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  ) : (
    <button
      type={type}
      className={`${styles.buttonPrimary}${className ? ` ${className}` : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
