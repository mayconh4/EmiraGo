'use client';

import React from 'react';
import { 
  ScrollView, 
  Text, 
  View, 
  TextInput, 
  FlatList, 
  Image, 
  SafeAreaView, 
  Pressable 
} from 'react-native';
import { Search, MapPin, ChevronRight } from 'lucide-react-native';
import { MotiView } from 'moti';

// Mock Data (Reutilizando a lógica do Web)
const suggested = [
  {
    id: '1',
    title: 'Private Desert Safari',
    price: 'AED 800',
    image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=800&auto=format&fit=crop',
    rating: '4.9'
  },
  {
    id: '2',
    title: 'Yacht Sunset Route',
    price: 'AED 1200',
    image: 'https://images.unsplash.com/photo-1544413647-ad349005086d?q=80&w=800&auto=format&fit=crop',
    rating: '5.0'
  }
];

export default function ExploreScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView 
        className="flex-1 px-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 32, paddingBottom: 120 }}
      >
        {/* Header */}
        <MotiView
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 800, type: 'timing' }}
        >
          <Text className="text-[34px] font-bold tracking-tight text-apple-black leading-[41px] mb-2">
            Where to next?
          </Text>
          <Text className="text-[17px] text-gray-400 font-medium mb-8">
            World-class guides, at your command.
          </Text>
        </MotiView>

        {/* Search Bar - Spotlight Style */}
        <View className="flex-row items-center bg-apple-gray h-12 rounded-xl px-4 items-center mb-10 shadow-sm">
          <Search size={20} color="#8E8E93" strokeWidth={2.5} />
          <TextInput 
            placeholder="Search for an experience" 
            placeholderTextColor="#8E8E93"
            className="flex-1 ml-3 text-[17px] font-medium"
          />
        </View>

        {/* Featured Section */}
        <View className="mb-10">
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-[20px] font-bold tracking-tight">Curated for you</Text>
            <Pressable>
              <Text className="text-apple-blue font-semibold">View all</Text>
            </Pressable>
          </View>

          <FlatList
            data={suggested}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ gap: 20 }}
            renderItem={({ item }) => (
              <Pressable className="w-[280px]">
                <View className="bg-apple-gray rounded-3xl overflow-hidden aspect-[4/5] shadow-apple mb-4">
                  <Image source={{ uri: item.image }} className="w-full h-full" />
                  <View className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full">
                    <Text className="text-[12px] font-bold">★ {item.rating}</Text>
                  </View>
                </View>
                <Text className="text-[17px] font-bold mb-1">{item.title}</Text>
                <View className="flex-row items-center">
                  <Text className="text-[15px] font-semibold text-gray-500">{item.price}</Text>
                  <Text className="text-[15px] text-gray-300 mx-2">•</Text>
                  <View className="flex-row items-center">
                    <MapPin size={12} color="#8E8E93" />
                    <Text className="text-[14px] text-gray-400 ml-1">Dubai</Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>

        {/* Categories Chip List */}
        <View>
          <Text className="text-[20px] font-bold tracking-tight mb-4">Browse by Category</Text>
          <View className="flex-row flex-wrap gap-3">
            {['Private Yacht', 'Desert', 'City Culture', 'Dining'].map(cat => (
              <View key={cat} className="bg-apple-gray px-4 py-2 rounded-full border border-gray-100 flex-row items-center">
                <Text className="text-[15px] font-semibold text-apple-black">{cat}</Text>
                <ChevronRight size={14} color="#C7C7CC" className="ml-1" />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
