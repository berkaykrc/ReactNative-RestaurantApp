import { StyleSheet, Dimensions } from "react-native";

const DEVICE_SIZE = Dimensions.get('window');

const categoryCardStyles = StyleSheet.create({
    categoryCardContainer: {
        backgroundColor: '#bdbdbd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryContent: {
        backgroundColor: 'white',
        margin: 5,
        padding: 5,
    },
    categoryCardImage: {
        height: DEVICE_SIZE.height / 3,
    },
    categoryCardText: {
        color: 'black',
    }
})

export { categoryCardStyles }