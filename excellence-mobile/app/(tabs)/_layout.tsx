import React from 'react';
import { Tabs } from 'expo-router';
import { Search, Compass, Bookmark, User } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { Platform, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1D1D1F',
        tabBarInactiveTintColor: '#C7C7CC',
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          marginTop: -4,
          marginBottom: 4,
        },
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
          height: 84,
          paddingBottom: Platform.OS === 'ios' ? 24 : 12,
        },
        tabBarBackground: () => (
          <BlurView intensity={80} tint="light" style={StyleSheet.absoluteFill} />
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <Search size={24} color={color} strokeWidth={2.5} />,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color }) => <Compass size={24} color={color} strokeWidth={2.5} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color }) => <Bookmark size={24} color={color} strokeWidth={2.5} />,
        }}
      />
    </Tabs>
  );
}
