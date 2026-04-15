'use client';

import React from 'react';
import { 
  ScrollView, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Pressable,
  Dimensions
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ChevronLeft, Share, Languages, Award, ShieldCheck } from 'lucide-react-native';
import { AppleButton } from '@/components/AppleButton';
import { MotiView } from 'moti';

const { width } = Dimensions.get('window');

// Mock Data local para demonstração
const guides: any = {
  'alexander-miller': {
    name: 'Alexander Miller',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    bio: 'Guiding travelers through Dubai with a focus on clarity, comfort and authentic experiences. My mission is to reveal the hidden stories.',
    languages: ['Portuguese', 'English', 'Arabic'],
    specialties: ['Private City Tours', 'Desert Expert']
  }
};

export default function GuideProfileScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const guide = guides[id as string] || guides['alexander-miller'];

  return (
    <View className="flex-1 bg-white">
      <ScrollView 
        className="flex-1"
        bounces={true}
        showsVerticalScrollIndicator={false}
      >
        {/* Editorial Image Header */}
        <View className="relative w-full aspect-[4/5] bg-apple-gray">
          <Image source={{ uri: guide.image }} className="w-full h-full" />
          
          {/* Top Actions */}
          <SafeAreaView className="absolute top-0 w-full flex-row justify-between px-6 pt-12">
            <Pressable 
              onPress={() => router.back()}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md items-center justify-center border border-white/20"
            >
              <ChevronLeft size={24} color="white" />
            </Pressable>
            <Pressable className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md items-center justify-center border border-white/20">
              <Share size={20} color="white" />
            </Pressable>
          </SafeAreaView>
        </View>

        <View className="px-6 -mt-8 bg-white rounded-t-[32px] pt-10 pb-40">
           {/* Trust Badges */}
           <View className="flex-row gap-2 mb-6">
              <View className="flex-row items-center bg-green-50 px-3 py-1.5 rounded-full">
                <ShieldCheck size={14} color="#15803d" />
                <Text className="text-green-700 text-[12px] font-bold ml-1">Verified Expert</Text>
              </View>
              <View className="flex-row items-center bg-apple-gray px-3 py-1.5 rounded-full">
                <Award size={14} color="#1D1D1F" />
                <Text className="text-apple-black text-[12px] font-bold ml-1">Top Rated</Text>
              </View>
           </View>

           <MotiView
            from={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
           >
            <Text className="text-[34px] font-bold tracking-tight text-apple-black mb-2">{guide.name}</Text>
            <View className="flex-row flex-wrap gap-2 mb-8">
              {guide.specialties.map((s: string) => (
                <Text key={s} className="text-gray-400 font-semibold tracking-wide uppercase text-[12px]">{s}</Text>
              ))}
            </View>

            <View className="h-[1px] bg-gray-100 w-full mb-8" />

            <Text className="text-[17px] leading-[24px] text-gray-800 font-light mb-10">
              {guide.bio}
            </Text>

            <View className="flex-row items-center justify-between mb-10">
              <View className="flex-row items-center">
                <Languages size={20} color="#8E8E93" />
                <Text className="text-[15px] font-medium text-gray-500 ml-2">Fluent in {guide.languages.join(", ")}</Text>
              </View>
            </View>
           </MotiView>
        </View>
      </ScrollView>

      {/* Persistent CTA Bar (Floating Apple Style) */}
      <View className="absolute bottom-0 w-full px-6 pt-4 pb-12 bg-white/80 backdrop-blur-3xl border-t border-gray-100">
         <View className="flex-row items-center justify-between">
           <View>
             <Text className="text-gray-400 font-semibold text-[13px] uppercase">From</Text>
             <Text className="text-[22px] font-bold text-apple-black">AED 800</Text>
           </View>
           <View className="w-[180px]">
             <AppleButton 
              title="Book Experience" 
              onPress={() => router.push('/modal')}
             />
           </View>
         </View>
      </View>
    </View>
  );
}
