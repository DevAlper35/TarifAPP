import { View, FlatList} from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import styles from "./Meal.style"
import MealCard from '../../components/MealCard'

import Loading from '../../components/Loading'
import Error from '../../components/Error'

export default function Meal({navigation,route}) {
  const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c="
  const {strCategory} = route.params
  const {resultData, loading, error} = useFetch(`${API_URL}${strCategory}`)

  const handleDetail = (idMeal) => {
    navigation.navigate("Detail",{idMeal})
  }
  
  return (
    <View style={styles.container}>
      <FlatList
        data={resultData.meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({item}) => <MealCard meal={item} onSelect={()=> handleDetail(item.idMeal)}/>}
        />
    </View>
  )
}