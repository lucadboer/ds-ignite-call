import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  color: '$white',
  padding: '$3 $3',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  resize: 'vertical',

  fontSize: '$sm',
  fontFamily: '$default',

  display: 'flex',
  alignItems: 'baseline',
  height: 120,

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {
  as?: ElementType
}

TextArea.displayName = 'TextArea'
