'use client';

import React, { useState } from 'react';
import { 
  Text, 
  View, 
  Pressable, 
  SafeAreaView, 
  Dimensions 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { X, Calendar, Clock, Users, ShieldCheck } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { AppleButton } from '@/components/AppleButton';
import { MotiView, AnimatePresence } from 'moti';

const { width } = Dimensions.get('window');

export default function BookingModal() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    if (step === totalSteps) {
      router.replace('/confirmed');
      return;
    }
    setStep(s => Math.min(s + 1, totalSteps));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      
      {/* Custom Header */}
      <View className="px-6 h-14 flex-row items-center justify-between border-b border-gray-50">
        <Text className="text-[17px] font-bold">Reserva Privada</Text>
        <Pressable onPress={() => router.back()} className="p-2">
          <X size={24} color="#1D1D1F" />
        </Pressable>
      </View>

      {/* Progress Bar */}
      <View className="flex-row w-full h-1 bg-gray-50">
        <MotiView 
          animate={{ width: `${(step / totalSteps) * 100}%` }}
          className="h-full bg-apple-blue"
        />
      </View>

      <View className="flex-1 px-8 pt-12">
        <AnimatePresence exitBeforeEnter>
          {step === 1 && (
            <MotiView
              key="step1"
              from={{ opacity: 0, translateX: 20 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: -20 }}
              className="flex-1"
            >
              <Text className="text-[34px] font-bold tracking-tight mb-4">Escolha a data</Text>
              <Text className="text-[17px] text-gray-400 mb-10">Quando você gostaria de começar sua jornada?</Text>
              
              <View className="bg-apple-gray p-6 rounded-3xl flex-row items-center">
                <Calendar size={24} color="#1D1D1F" />
                <Text className="ml-4 text-[17px] font-semibold text-apple-black">15 de Maio, 2026</Text>
              </View>
            </MotiView>
          )}

          {step === 2 && (
            <MotiView
              key="step2"
              from={{ opacity: 0, translateX: 20 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: -20 }}
              className="flex-1"
            >
              <Text className="text-[34px] font-bold tracking-tight mb-4">Duração</Text>
              <Text className="text-[17px] text-gray-400 mb-10">Selecione o tempo ideal para sua imersão.</Text>
              
              <View className="gap-4">
                {['4 Horas', '8 Horas (Dia Todo)'].map((d, i) => (
                  <Pressable key={d} className={`p-6 rounded-3xl border ${i === 1 ? 'border-apple-blue bg-blue-50/30' : 'border-gray-100 bg-apple-gray'}`}>
                    <View className="flex-row items-center justify-between">
                      <View className="flex-row items-center">
                        <Clock size={20} color={i === 1 ? '#0071E3' : '#1D1D1F'} />
                        <Text className={`ml-4 text-[17px] font-bold ${i === 1 ? 'text-apple-blue' : 'text-apple-black'}`}>{d}</Text>
                      </View>
                    </View>
                  </Pressable>
                ))}
              </View>
            </MotiView>
          )}

          {step === 3 && (
            <MotiView
              key="step3"
              from={{ opacity: 0, translateX: 20 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: -20 }}
              className="flex-1"
            >
              <Text className="text-[34px] font-bold tracking-tight mb-4">Convidados</Text>
              <Text className="text-[17px] text-gray-400 mb-10">Quantas pessoas estarão com você?</Text>
              
              <View className="flex-row items-center justify-center gap-12 py-10">
                <Pressable className="w-16 h-16 rounded-full bg-apple-gray items-center justify-center">
                  <Text className="text-[32px] font-light">-</Text>
                </Pressable>
                <Text className="text-[64px] font-bold">2</Text>
                <Pressable className="w-16 h-16 rounded-full bg-apple-gray items-center justify-center">
                  <Text className="text-[32px] font-light">+</Text>
                </Pressable>
              </View>
            </MotiView>
          )}

          {step === 4 && (
            <MotiView
              key="step4"
              from={{ opacity: 0, translateX: 20 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: -20 }}
              className="flex-1"
            >
              <Text className="text-[34px] font-bold tracking-tight mb-4">Pagamento</Text>
              <Text className="text-[17px] text-gray-400 mb-10">Finalize com segurança.</Text>
              
              <View className="bg-apple-gray p-8 rounded-[32px] items-center gap-6">
                <View className="w-20 h-20 bg-black rounded-2xl items-center justify-center">
                  <Text className="text-white text-[32px]"></Text>
                </View>
                <Text className="text-[17px] font-bold text-center">Apple Pay Habilitado</Text>
                <View className="flex-row items-center">
                  <ShieldCheck size={16} color="#8E8E93" />
                  <Text className="text-[13px] text-gray-400 font-medium ml-2 text-center">Transação Criptografada</Text>
                </View>
              </View>
            </MotiView>
          )}
        </AnimatePresence>
      </View>

      {/* Action Footer */}
      <View className="px-8 pb-12">
        <AppleButton 
          title={step === totalSteps ? "Pagar Agora" : "Continuar"} 
          onPress={nextStep} 
        />
        {step > 1 && (
          <Pressable onPress={() => setStep(s => s - 1)} className="mt-4 items-center">
            <Text className="text-gray-400 font-semibold">Voltar</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}
