import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    } ,
    header: {
        fontSize:30,
        fontWeight:"bold",
        color:"purple",
        margin:20,
    },
    input: {
       marginLeft:20,
       borderWidth:1,
       backgroundColor:"lightgray",
       borderRadius:5,
       height:40,
       width:300,
       paddingLeft:15,
    } , 

    card_style: {
        backgroundColor:"lightgray",
        padding:10,
        margin:10,
    }

    }
)