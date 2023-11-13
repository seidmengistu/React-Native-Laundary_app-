import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        marginHorizontal:12,
        marginTop:SIZES.medium,
    },

    header:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between',
        marginTop:SIZES.small,

    },
    headerTxt:{
        fontFamily:"semibold",
        fontSize:SIZES.large,
    }

})


export default styles;