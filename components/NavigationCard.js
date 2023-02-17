import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'twrnc';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

const NavigationCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
  return (
    <SafeAreaView style={te`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Hello World</Text>
      <View>
        <GooglePlacesAutocomplete
            placeholder='Where to?'
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={'search'}
            minLength={2}
            onPress={(data, details = null) => {
                dispatch(
                    setDestination({
                        location: details.geometry.location,
                        description: data.description,
                    })
                )

                navigation.navigate("RideOptionsCard");
            }}
            enablePoweredByContainer={falsse}
            query={{
                key: GOOGLE_MAPS_APIKEY,
                language:"en",
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
        />
      </View>
    </SafeAreaView>
  )
}

export default NavigationCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "gray",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
})