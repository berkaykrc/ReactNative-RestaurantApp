import React from "react";
import { categoryCardStyles } from "../styles/categoryCardStyle";
import { Image, Text, View, TouchableOpacity } from "react-native";

function CategoryCard(props) {
    console.log(props.categoryData + "props categorydata")
    return (
        <View style={categoryCardStyles.categoryCardContainer}>
            <TouchableOpacity style={categoryCardStyles.categoryCardContent} onPress={props.onPress}>
                <Image source={{ uri: props.categoryData['strCategoryThumb'] }} />
                <Text style={categoryCardStyles.categoryCardText}>{props.categoryData['strCategory']}</Text>
            </TouchableOpacity>
        </View>
    )
}


export { CategoryCard };