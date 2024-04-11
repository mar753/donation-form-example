import { useEffect, useState } from 'react'
import styles from './DollarInput.module.scss'

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

  const handleInputValueChange = (value: string) => {
    const numberRegexp = /[\d.]/
    const filteredValues = value
      .split('')
      .filter((item) => numberRegexp.test(item))
      .join('')

    const [integerPart, fractionalPart] = filteredValues.split('.')

    if (integerPart.length > 3) {
      const newFilteredValue = integerPart
        .split('')
        .slice()
        .reverse()
        .reduce((accumulator, currentValue, index, array) => {
          const isLastIndex = index + 1 === array.length
          return (
            '' +
            ((index + 1) % 3 || isLastIndex ? '' : ',') +
            currentValue +
            accumulator
          )
        }, '')

      setInputValueWithComma(
        `${newFilteredValue}${fractionalPart !== undefined ? `.${fractionalPart}` : ''}`
      )
    } else {
      setInputValueWithComma(filteredValues)
    }
    setInputValue(filteredValues.replace(',', ''))
  }

  useEffect(() => {
    onChange?.(inputValue)
  }, [inputValue, onChange])

  return (
    <input
      className={`${styles.inputElement}${className ? ` ${className}` : ''}`}
      type="text"
      placeholder="0.00"
      pattern="^[0-9]{1,2}([,.][0-9]{1,2})?$"
      value={inputValueWithComma}
      onChange={(e) => handleInputValueChange(e.target.value)}
      id={id}
    />
  )
}

export default DollarInput
