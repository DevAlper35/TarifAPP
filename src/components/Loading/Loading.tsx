import React from 'react'
import LottieView from 'lottie-react-native'
import { StyleSheet, View } from 'react-native'

export default function Loading() {
  return (
      <View style={styles.container}>
          <LottieView style={styles.container}source={require("../../asset/meal.json")} autoPlay/>
      </View>
  )
}

const styles = StyleSheet.create({
  container : {
      flex: 1
  }
})