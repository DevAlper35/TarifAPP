import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from "./Category.style"
import useFetch from '../../hooks/useFetch'
import CategoryCard from '../../components/CategoryCard'

export default function Category({navigation}) {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"

    const handleMeal = (idCategory) => {
        navigation.navigate("Meal", {idCategory})
    }
    const {resultData, loading, error} = useFetch(API_URL)
    return (
        <View style={styles.container}>
            <FlatList
                data={resultData.categories}
                keyExtractor={item => item.idCategory}
                renderItem={({item})=><CategoryCard category={item} onSelect={()=> handleMeal(item.idCategory)}/>}
                />
        </View>
    )
}