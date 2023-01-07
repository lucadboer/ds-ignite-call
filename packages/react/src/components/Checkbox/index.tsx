<<<<<<< HEAD
=======
import { ComponentProps, ElementType } from 'react'
>>>>>>> 72de498ab306d7f4e4ad745ade984534b61268f8
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
<<<<<<< HEAD
=======

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {
  as?: ElementType
}

Checkbox.displayName = 'Checkbox'
>>>>>>> 72de498ab306d7f4e4ad745ade984534b61268f8
