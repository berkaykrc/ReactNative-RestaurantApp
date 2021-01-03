import axios from 'axios';
import { CategoryCard } from '../components/CategoryCard'
import React, { useState, useEffect } from 'react';

function CategoryDetail({route},props) {
    const [mealDetailList, handleMealDetail] = useState([]);
    const { data } = route.params;
    const mealFilterUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='

    async function fetchCategoryDetail() {
        const { data: foo } = await axios.get(mealFilterUrl + data.categories['strCategory']);
        handleMealDetail(foo)
    }

    useEffect(() => { fetchCategoryDetail(); }, [mealDetailList])

    function renderCategories({ item }) {
        <CategoryCard mealDetail={item} onPress={()=>props.navigation.navigate('Detail'), {data : item}}/>
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