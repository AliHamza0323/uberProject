import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Map from "../components/Map"
import MapView from 'react-native-maps'
import { createStackNavigator } from '@react-navigation/stack';
import NavigationCard from '../components/NavigationCard';
import RideOptionsCard from '../components/RideOptionsCard';



const MapScreen = () => {
  const Stack = createStackNavigator()

  return (
    <View>

      <View style={tw`h-1/2`}>
        <Map/>
      </View>

      <View style={tw`h-1/2`}></View>
      <Stack.Navigator>
        <Stack.Screen
          name="NavigationCard"
          component={NavigationCard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RideOptionsCard"
          component={RideOptionsCard}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </View>
  )
}

export default MapScreen