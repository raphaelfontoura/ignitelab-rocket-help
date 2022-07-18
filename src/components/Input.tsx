import React from 'react';
import {Input as NativeInput, IInputProps} from 'native-base';

function Input({ ...rest }: IInputProps) {
  return (
    <NativeInput
      bg="gray.700"
      h={14}
      size="md" 
      borderWidth={0} 
      fontSize="md" 
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{
        borderWidth: 1,
        borderColor: "green.500",
        bg: "gray.700"
      }}
      {...rest}
    />
  )
}

export default Input