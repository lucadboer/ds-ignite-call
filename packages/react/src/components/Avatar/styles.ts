import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  display: 'inline-block',
  width: '$12',
  height: '$12',
  borderRadius: '$full',
  overflow: 'hidden',
})

export const AvatarImage = styled(Avatar.AvatarImage, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
  objectFit: 'cover', // Não distorcer a imagem
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})
