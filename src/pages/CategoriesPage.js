import { CategoryCard } from "../components";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";

function CategoriesPage({ navigation}) {
    const [categoriesList, handleCategories] = useState([]);

    async function fectData() {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        categoryObj = response.data.categories.map(category => category);
        handleCategories(categoryObj)
    }

    useEffect(() => { fectData(); }, []);

    function selectedCategory(categoryData) {
        navigation.navigate('CategoryDetailsStack',{screen:'CategoryList'}, { categoryID: categoryData.idCategory })
    }

    function renderCategories({ item }) {
        return (
            <CategoryCard onPress={selectedCategory(item)} categoryData={item} />
        )
    }

    return (
        <View>
            <FlatList
                renderItem={renderCategories}
                data={categoriesList}
                keyExtractor={(item) => item.idCategory}
            />
        </View>
    )
}

export { CategoriesPage }