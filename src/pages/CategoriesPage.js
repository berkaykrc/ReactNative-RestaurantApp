import { CategoryCard } from "../components";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import { CATEGORIES_API_URL } from "@env";

function CategoriesPage({ navigation }) {
    const [categoriesList, handleCategories] = useState([]);

    async function fectData() {
        const { data: { categories } } = await axios.get(CATEGORIES_API_URL);
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