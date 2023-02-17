import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "123",
        title: "Get a Ride",
        image: "https://cdn.dribbble.com/users/914217/screenshots/6122031/wav_detailshot.png",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLg-jbXzoA94KfP5JavAIDj57u1Vkip-WRXkPc3CEogtaK90cUhgHaK5WVixH5eDl1s8c&usqp=CAU",
        screen: "EatsScreen",

    }
]

const NavOptions = () => {
 const navigation = useNavigation()
 const origin = useSelector(selectOrigin);

    return (
      <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
        onPress={() => navigation.navigate(item.screen)} 
        style={tw`p-2 p-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        disabled={!origin}
        >
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image
            style={{width: 120, height: 120, resizeMode:'contain'}}
            source={{uri: item.image}}/>
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <Icon
           style={tw`p-2 bg-black rounded-full w-10 mt-4`}
           name="arrowright"
           color="white" 
           type="antdesign" />
          </View>
        </TouchableOpacity>
      )}
      />
    )
  }

export default NavOptions
