import axios from 'axios';
import { CategoryCard } from '../components'
import React, { useState, useEffect } from 'react';

function MealList({ route,navigation }) {
    const [mealList, handleMealList] = useState([]);
    const { categoryName } = route.params;
    const mealFilterUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?'

    async function fetchMeals() {
        const { data: { meals } } = await axios.get(mealFilterUrl,{
            params:{
                'c': categoryName
            }
        });
        handleMealList(meals)
    }

    useEffect(() => { fetchMeals(); }, [mealList])

    function renderMeals({ item }) {
        <CategoryCard mealDetail={item} onPress={() => navigation.navigate('Detail'), { data: item.idMeal }} />
    }

    return (
        <View>
            <FlatList
                renderItem={renderMeals}
                data={mealList}
                keyExtractor={(item) => item.idMeal}
            />
        </View>
    )
}

export { MealList }