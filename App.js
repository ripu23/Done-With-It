import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  const categories = [
    {
      label: 'Furniture',
      value: 1
    },
    {
      label: 'Clothing',
      value: 2
    },
    {
      label: 'Cameras',
      value: 3
    }
  ];
  const [category, setCategory] = useState();

  return (
    // <ListingDetailsScreen />
    // <ViewImageScreen />
    // <MessagesScreen />
    // <AccountScreen />
    // <ListingsScreen />
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={item => setCategory(item)}
    //     items={categories}
    //     icon='apps'
    //     placeholder='category'
    //   />
    //   <AppTextInput icon='email' placeholder='email' />
    // </Screen>
    <LoginScreen />
  );
}
