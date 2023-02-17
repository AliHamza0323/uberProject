import React from 'react'
import tw from 'twrnc';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env"
import {useDispatch} from "react-redux"
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch()


  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
         style={{
          width: 100,
          height: 100,
          resizeMode: "contain",
         }}
        source={{
          uri: "https://1000logos.net/wp-content/uploads/2017/09/Uber-logo.jpg"
        }}/>
      
       <GooglePlacesAutocomplete
         placeholder="Where Form?"
         styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
         }}
         onPress={(data, details = null)=>{
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          )
         }}
         fetchDetails={true}
         returnKeyType={"search"}
         enablePoweredByContainer={false}
         minLength={2}

         query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
         }}

         nearbyPlacesAPI="GooglePlacesSearch"
         debounce={400}
         />

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});