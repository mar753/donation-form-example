import { useEffect, useState } from 'react'
import styles from './DollarInput.module.scss'
import { useGenerateTwoNumberVariants } from '../../hooks'

const DollarInput = ({
  id,
  className,
  onChange,
}: {
  id?: string
  className?: string
  onChange?: (value: string) => void
}) => {
  const [inputValue, setInputValue] = useState('')
  const [inputValueWithComma, setInputValueWithComma] = useState('')
  const convert = useGenerateTwoNumberVariants()

  const handleInputValueChange = (value: string) => {
    const { plain, comma } = convert(value)

    setInputValue(plain)
    setInputValueWithComma(comma)
  }

  useEffect(() => {
    onChange?.(inputValue)
  }, [inputValue, onChange])

  return (
    <input
      className={`${styles.inputElement}${className ? ` ${className}` : ''}`}
      type="text"
      placeholder="0.00"
      value={inputValueWithComma}
      onChange={(e) => handleInputValueChange(e.target.value)}
      id={id}
    />
  )
}

export default DollarInput
