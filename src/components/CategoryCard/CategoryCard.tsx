import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from "./CategoryCard.style"

export default function CategoryCard({category, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
        <Image style={styles.image} source={{uri:category.strCategoryThumb}}/>
        <Text style={styles.title}>{category.strCategory}</Text>
        </View>
    </TouchableWithoutFeedback>
  )
}