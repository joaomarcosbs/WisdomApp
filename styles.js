import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#EBE8E2',
        display: "flex",
        alignItems: "center"
    },

    barTextColor: {
        color: '#000'
    },

    titleContainer: {
        marginTop: "25%"
    },

    title: {
        color: 'black',
        fontSize: 25,
        fontFamily: 'Poppins-Bold'
    },

    sentence: {
        width: "80%",
        top: "15%",
        height: "30%",
        display: "flex",
        justifyContent: "center",
        //backgroundColor: "red"
    }, 

    text: {
        color: 'black',
        fontSize: 25,
        fontFamily: 'Poppins-Regular',
        textAlign: "center",
    },

    buttonContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: '6%',
        top: "30%"
    },

    button: {
        width: "40%",
        height: "100%",
        backgroundColor: "black",
        borderRadius: 10
    },

    buttonText: {
        color: '#EBE8E2',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        textAlign: "center",
        marginTop: 9
    }
});

export default Styles;