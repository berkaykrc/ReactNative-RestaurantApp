import CategoryCard from "../components";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";

function CategoriesPage(props) {
    const [categoriesList, handleCategories] = useState([]);

    async function fectData() {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        handleCategories(response.data);
    }

    useEffect(() => { fectData(); }, [categoriesList]);

    function selectedCategory(categoryData) {
        props.navigation.navigate('CategoryList', { data: categoryData })
    }

    function renderCategories({ item }) {
        return (
            <CategoryCard onPress={() => selectedCategory(item)} categoryData={item} />
        )
    }

    return (
        <View>
            <FlatList
                renderItem={renderCategories}
                data={categoriesList}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export { CategoriesPage }