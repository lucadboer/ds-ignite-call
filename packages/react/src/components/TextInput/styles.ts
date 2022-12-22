import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$4 $3',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  color: '$gray400',
  fontSize: '$sm',
  fontFamily: '$default',
  padding: 0,
  margin: 0,
})

export const Input = styled('input', {
  fontSize: '$sm',
  fontFamily: '$default',
  background: 'transparent',
  color: '$white',
  border: 0,
  boxShadow: 0,
  outline: 0,

  '&:disabled': {
    cursor: 'not-allowed',
  },
})
