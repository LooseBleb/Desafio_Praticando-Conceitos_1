import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.gray400,
        marginTop: 10,
        height: 70,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'center'
    },
    title: {
        color: colors.gray100,
        flex: 1,
        fontSize: 15,
        marginRight: 10,
        marginLeft: 10
    },
    circle: {
        marginLeft: 15,
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    checkedCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor:colors.purpleBlue,
        borderWidth: 2,
        borderColor: colors.purpleBlue,
        alignItems: 'center',
        justifyContent: 'center'
    }
})