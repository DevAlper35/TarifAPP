import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
        paddingHorizontal: 5,
        flexDirection: "row",
        borderWidth:1,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        backgroundColor: "white"
    },
    image: {
        width: 100,
        minHeight:100,
        resizeMode : "contain",
        borderRadius: 50
    },
    title: {
        color: "black",
        fontSize: 24,
        textAlignVertical: "center",
        marginLeft:20,
        fontWeight: "500"
        
    }
})