import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { MotiView } from 'moti';

interface AppleButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const AppleButton = ({ title, onPress, variant = 'primary', className = "" }: AppleButtonProps) => {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  return (
    <Pressable onPress={handlePress} className={`w-full overflow-hidden ${className}`}>
      {({ pressed }) => (
        <MotiView
          animate={{
            scale: pressed ? 0.98 : 1,
            opacity: pressed ? 0.9 : 1,
          }}
          transition={{
            type: 'spring',
            damping: 15,
            stiffness: 150,
          }}
          className={`h-14 rounded-2xl items-center justify-center ${
            variant === 'primary' ? 'bg-apple-black' : 'bg-apple-gray border border-gray-200'
          }`}
        >
          <Text className={`text-[17px] font-semibold tracking-tight ${
            variant === 'primary' ? 'text-white' : 'text-apple-black'
          }`}>
            {title}
          </Text>
        </MotiView>
      )}
    </Pressable>
  );
};
