import * as Checkbox from '@radix-ui/react-checkbox'

import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  borderRadius: '$xs',
  overflow: 'hidden',
  lineHeight: 0,
  boxSizing: 'border-box',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  cursor: 'pointer',

  '&:focus': {
    borderColor: '$ignite300',
  },

  '&[data-state=checked]': {
    border: 0,
    backgroundColor: '$ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
    opacity: 0.8,
  },
  to: {
    transform: 'translateY(-100%)',
    opacity: 0,
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  width: '$4',
  height: '$4',
  color: '$white',

  '&[data-state=checked]': {
    animation: `${slideIn} ease-in-out 0.2s`,
  },

  '&[data-state=unchecked]': {
    animation: `${slideOut} ease-in-out 0.2s`,
  },
})
