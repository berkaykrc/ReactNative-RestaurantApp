import axios from 'axios';
import React, { useState, useEffect } from 'react';

function MealDetail({ route }) {
    const [mealDetailList, handleMealDetail] = useState({});
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

    function openURL(url) {
        Linking.openURL(url).catch((err) => alert('An error occurred', err));
    }

    return (
        pass
    )
}

export { MealDetail }