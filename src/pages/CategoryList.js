import axios from 'axios';
import { CategoryCard } from '../components'
import React, { useState, useEffect } from 'react';

function CategoryList({route}) {
    console.log(route.params);
    const [mealDetailList, handleMealDetail] = useState([]);
    const { categoryID } = route.params;
    const mealFilterUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='

    async function fetchCategoryDetail() {
        const {data} = await axios.get(mealFilterUrl + categoryID);
        handleMealDetail()
    }

    useEffect(() => { fetchCategoryDetail(); }, [mealDetailList])

    function renderCategories({ item }) {
        <CategoryCard mealDetail={item} onPress={()=>navigation.navigate('Detail'), {data : item}}/>
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

export { CategoryList }