import axios from 'axios';
import { CategoryCard } from '../components'
import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';

function MealDetail({ route }) {
    const [mealDetailList, handleMealDetail] = useState([]);
    const { mealID } = route.params;
    const mealDetail = 'https://www.themealdb.com/api/json/v1/1/lookup.php?'

    async function fetchMealDetail() {
        const { data: { meals } } = await axios.get(mealDetail, {
            params: {
                'i': mealID,
            }
        });
        handleMealDetail(meals)
    }

    useEffect(() => { fetchMealDetail(); }, [mealDetailList])

    function renderMealDetails({ item }) {
        return (
            <View>
                <CategoryCard mealDetail={item} />
                <Button onPress={openURL(item.strYoutube)} />
            </View>
        )
    }

    function openURL(url) {
        Linking.openURL(url).catch((err) => alert('An error occurred', err));
    }

    return (
        <FlatList
            renderItem={renderMealDetails}
            data={mealDetailList}
            keyExtractor={(item) => item.id}
        />
    )
}

export { MealDetail }