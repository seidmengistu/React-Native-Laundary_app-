
import { StyleSheet } from "react-native";
import {COLOR,COLORS,SIZES} from "../constants/index";

const styles = StyleSheet.create({
    appBarWrapper:{
        marginHorizontal:22,
        marginTop:SIZES.small,
    },
    appBar:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",  
        marginTop: Platform.OS === 'ios' ? 0 : SIZES.xLarge,
     
    },
    location:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.gray,
    },
    cartCount:{
        position:"absolute",
        bottom:16,
        width:16,
        height:16,
        borderRadius:8,
        alignItems:"center",
        backgroundColor:"green",
        justifyContent:"center",
        zIndex:999
    },
    cartNumber:{
        fontFamily:"regular",
        fontWeight:600,
        color:COLORS.lightWhite,
        fontSize:10,
    },

    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background, // Adjust the background color as needed
      },
      scrollView: {
        flex: 1,
        paddingTop: SIZES.statusBarHeight, // Adjust based on your design needs
      },


    

    
})


export default styles