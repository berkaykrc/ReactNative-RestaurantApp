import { CategoryCard } from "../components";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";

const CATEGORY_URL='https://www.themealdb.com/api/json/v1/1/categories.php'

function CategoriesPage({ navigation }) {
    const [categoriesList, handleCategories] = useState([]);

    async function fectData() {
        const { 
            data: { categories }, 
        } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        console.log(categories)
        handleCategories(categories)
    }

    useEffect(() => { fectData(); }, []);

    function selectedCategory(categoryData) {
        navigation.navigate('CategoryDetailsStack', { screen: 'CategoryList' }, { categoryName: categoryData.strCategory })
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