import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import styles from "./MealCard.style"

export default function MealCard({meal, onSelect})
{
  return(
  <TouchableWithoutFeedback onPress={onSelect}>
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:meal.strMealThumb}}/>
      <Text style={styles.title}>{meal.strMeal}</Text>
    </View>
  </TouchableWithoutFeedback>
  )
}