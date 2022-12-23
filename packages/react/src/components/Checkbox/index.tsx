import { ComponentProps, ElementType } from 'react'
import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export function Checkbox() {
  return (
    <CheckboxContainer>
      <CheckboxIndicator>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {
  as?: ElementType
}

Checkbox.displayName = 'Checkbox'
