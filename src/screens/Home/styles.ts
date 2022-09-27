import { Platform, StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 40 : 0,
        backgroundColor: colors.gray700,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.gray700,
        height: 200,
    },
    tarefas: {
        flex: 1,
        backgroundColor: colors.grayBack,
        alignItems: 'center',
    },
    form: {
        alignItems: 'center',
        flexDirection: 'row',
        bottom: 30,
        width: '90%'
    },
    input: {
        backgroundColor: colors.gray500,
        flex: 1,
        color: colors.gray100,
        fontSize: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 20,
        padding: 16,
        marginRight: 2,
    },
    input_focused: {
        backgroundColor: colors.gray500,
        flex: 1,
        color: colors.gray100,
        fontSize: 20,
        borderColor: colors.purpleBlue,
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 20,
        padding: 16,
        marginRight: 2,
    },
    buttonAdd: {
        color: '#fff',
        fontSize: 24
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 8,
        backgroundColor: colors.blueDark,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'black'

    },
    status: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 10
    },
    list:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    item: {
        width: '90%',
        flex: 1
    }
})


