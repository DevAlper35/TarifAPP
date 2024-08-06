import React from 'react'
import LottieView from 'lottie-react-native'
import { StyleSheet, View } from 'react-native'

export default function Error() {
    return(
        <View style={styles.container}>
            <LottieView style={styles.container}source={require("../../asset/errorv2.json")} autoPlay/>
        </View>
)}

const styles = StyleSheet.create({
    container : {
        flex: 1
    }
})