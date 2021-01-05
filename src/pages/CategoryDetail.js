import axios from 'axios';
import { CategoryCard } from '../components'
import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';

function CategoryDetail({ route }) {
    const [mealDetailList, handleMealDetail] = useState([]);
    const { data } = route.params;
    const mealDetail = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.idMeal}'

    async function fetchCategoryDetail() {
        const { data: foo } = await axios.get(mealDetail + data['strMeal']);
        handleMealDetail(foo)
    }

    useEffect(() => { fetchCategoryDetail(); }, [mealDetailList])

    function renderCategories({ item }) {
        return (
            <View>
                <CategoryCard mealDetail={item} />
                <Button onPress={openURL(item['strYoutube'])} />
            </View>
        )
    }

    function openURL(url) {
        Linking.openURL(url).catch((err) => alert('An error occurred', err));
    }

    return (
        <View>
            <FlatList
                renderItem={renderCategories}
                data={mealDetailList}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export { CategoryDetail }