import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10
  },
  image: {
    width: "100%",
    height: 175,
    borderRadius: 20,
    position: "relative"
  },
  title:{
    position: "absolute",
    bottom: 0,
    textAlign: "right",
    width: "100%",
    color: "white",
    textAlignVertical: "bottom",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontSize: 28,
    fontWeight: "bold",
    padding: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }
})