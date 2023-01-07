import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarImageProps } from '@ignite-ui/react'

export default {
  title: 'Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/lucadboer.png',
    alt: 'Imagem de perfil'
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarImageProps>

export const Primary: StoryObj<AvatarImageProps> = {}

export const ImageWithFallback: StoryObj<AvatarImageProps> = {
  args: {
    src: undefined
  }
}