export const useGenerateTwoNumberVariants = () => (value: string) => {
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

    return {
      plain: filteredValues.replace(',', ''),
      comma: `${newFilteredValue}${fractionalPart !== undefined ? `.${fractionalPart}` : ''}`,
    }

    //   setInputValueWithComma(
    //     `${newFilteredValue}${fractionalPart !== undefined ? `.${fractionalPart}` : ''}`
    //   )
  } else {
    //setInputValueWithComma(filteredValues)
    return {
      plain: filteredValues.replace(',', ''),
      comma: filteredValues,
    }
  }
  // setInputValue(filteredValues.replace(',', ''))
}
