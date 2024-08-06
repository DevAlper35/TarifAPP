import { View, Text, SafeAreaView, Image, ActivityIndicator, ScrollView, Button, Linking,Alert} from 'react-native'
import React, { useState } from 'react'
import styles from "./Detail.style"
import useFetch from '../../hooks/useFetch'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

//<Image style={styles.image} source={{uri:resultData.meals.strMealThumb}} />
export default function Detail({route}) {
  const API_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
  const {idMeal} = route.params
  const {resultData, loading, error} = useFetch(`${API_URL}${idMeal}`)

  const openYouTube = (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert("Bu URL açılamıyor: " + url);
        }
      })
      .catch((err) => console.error("An error occurred", err));
    }
  if (loading){
    return (
        <Loading/>
    )}
  if (error){
    return (
        <Error/>
        
    )}
  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={{uri:resultData.meals[0].strMealThumb}} />
        <View style={styles.container}>
          <Text style={styles.title}>{resultData.meals[0].strMeal}</Text>
          <Text style={styles.area}>{resultData.meals[0].strArea}</Text>
          <Text style={styles.desc}>{resultData.meals[0].strInstructions}</Text>
        </View>
          <View style={styles.button}>
            <Button color={"red"} title={"Youtube'da Aç"}
            onPress={() => openYouTube(resultData.meals[0].strYoutube)}/>
          </View>
      </ScrollView>
      
      
    </SafeAreaView>
    
  )
}