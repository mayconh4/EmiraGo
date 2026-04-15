'use client';

import React, { useEffect } from 'react';
import { 
  Text, 
  View, 
  SafeAreaView 
} from 'react-native';
import { CheckCircle2, MessageSquare } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { AppleButton } from '@/components/AppleButton';
import { MotiView } from 'moti';

export default function ConfirmationScreen() {
  const router = useRouter();

  useEffect(() => {
    // Sequência de haptics de sucesso (estilo Apple Pay)
    const successHaptic = async () => {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    };
    successHaptic();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-10">
        <MotiView
          from={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 12 }}
          className="w-24 h-24 bg-green-50 rounded-full items-center justify-center mb-8"
        >
          <CheckCircle2 size={48} color="#16a34a" strokeWidth={2.5} />
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 300 }}
          className="items-center"
        >
          <Text className="text-[34px] font-bold tracking-tight text-center mb-3">Tudo pronto!</Text>
          <Text className="text-[17px] text-gray-400 text-center leading-[24px] mb-12">
            Sua solicitação foi enviada ao Alexander Miller. Você receberá uma confirmação em breve.
          </Text>
        </MotiView>

        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 600 }}
          className="w-full bg-apple-gray p-6 rounded-3xl flex-row items-center mb-12"
        >
          <View className="w-10 h-10 bg-white rounded-full items-center justify-center shadow-sm">
            <MessageSquare size={18} color="#1D1D1F" />
          </View>
          <View className="ml-4 flex-1">
            <Text className="text-[15px] font-bold">Chat com o Guia</Text>
            <Text className="text-[13px] text-gray-400">Alexander Miller está online</Text>
          </View>
        </MotiView>
      </View>

      <View className="px-8 pb-12">
        <AppleButton 
          title="Voltar ao Início" 
          onPress={() => router.replace('/(tabs)')} 
        />
      </View>
    </SafeAreaView>
  );
}
