import { StyleSheet, Dimensions } from "react-native";

const DEVICE_SIZE = Dimensions.get('window');

const categoryCardStyles = StyleSheet.create({
    categoryCardContainer: {
        backgroundColor: '#bdbdbd',
    },
    categoryCardContext: {
        backgroundColor: 'white',
    },
    categoryCardImage: {
        height: DEVICE_SIZE.height / 3,
        borderRadius: 25,
    },
    categoryCardText: {
        color: 'black',
    }
})

export { categoryCardStyles }