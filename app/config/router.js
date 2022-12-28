import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';
import {Platform} from 'react-native';

const Stack = createStackNavigator();

function ContactsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{title: 'All contacts'}}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const buildTab = (component, name, label, icon) => (
  <Tab.Screen
    name={name}
    component={component}
    options={{
      title: label,
      tabBarLabel: label,
      tabBarIcon: ({color}) => (
        <Icon
          name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-${icon}`}
          color={color}
          size={25}
        />
      ),
    }}
  />
);

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {buildTab(ContactsStack, 'ContactsStack', 'Contacts', 'people')}
        {buildTab(NewContact, 'NewContact', 'New contact', 'person-add')}
        {buildTab(Me, 'Me', 'Me', 'person-circle')}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
