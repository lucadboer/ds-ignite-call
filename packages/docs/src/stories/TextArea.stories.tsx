import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    placeholder: 'Write about you...'
  },
  decorators: [
    (Story) => {
      return (
        <Box as='label' css={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '$2' }}>
          <Text size={'sm'}>About You</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}