import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect }from 'react'
import MapView, {Marker} from 'react-native-maps'
import { useSelector } from 'react-redux'
import tw from 'twrnc';
import {selectDestination, selectOrigin} from "../slices/navSlice"
import MapViewDirections from "react-native-maps-directions"
import { useRef } from "react"

const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const mapRef = useRef(null)

  useEffect(() => {
    if (!origin || !destination) return

    //Zoom and fit markers
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50},
    })

  }, [origin, destination])

  return (
    <MapView
    ref={mapRef}
    style={tw`flex-1`}
    mapType="mutedStandard"
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      longitude: -122.4324,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
  >

  {origin && destination && (
    <MapViewDirections
      origin={origin.description}
      destination={destination.description}
      apikey={GOOGLE_MAPS_APIKEY}
      strokeWidth={3}
      strokeColor="blue"
    />

  )}
  {origin?.location && (
    <Marker
        coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location,lng,
        }}
        title="Origin"
        description={origin.description}
        identifier="origin"
    />

  )}
  </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})