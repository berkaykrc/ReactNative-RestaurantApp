import React from "react";
import { categoryCardStyles } from "../styles/categoryCardStyle";
import { Image, Text, View, TouchableOpacity } from "react-native";

function CategoryCard({ categoryData, onPress }) {
    return (
        <TouchableOpacity style={categoryCardStyles.categoryCardContainer} onPress={onPress}>
            <View style={categoryCardStyles.categoryContent}>
                <Image
                    resizeMode={'contain'}
                    styles={categoryCardStyles.categoryCardImage}
                    source={
                        {
                            uri: categoryData.strCategoryThumb
                        }
                    }
                />
                <Text style={categoryCardStyles.categoryCardText}>{categoryData.strCategory}</Text>
            </View>
        </TouchableOpacity>
    )
}


export { CategoryCard };