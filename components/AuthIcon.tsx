import React from 'react';
import { Pressable, PressableProps } from 'react-native';

interface AuthIconProps extends PressableProps {
  children: React.ReactNode;
}

const AuthIcon = ({ children, onPress }: AuthIconProps) => {
  return (
    <Pressable
      onPress={onPress}
      className='bg-secondary p-2.5 rounded-full'
    >
      {children}
    </Pressable>
  )
}

export default AuthIcon