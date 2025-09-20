import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F5f5f5',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FF6B6B'
    },
    subtitle: {
        marginVertical: 16,
        fontSize: 16,
        color: '#666',
        fontStyle: 'italic',

    },
    input: {
        width: '100%',
        height: 50,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#333',
        borderWidth: StyleSheet.hairlineWidth
    },
    button: {
        backgroundColor: '#4ECDC4',
        height: 40,
        width: '100%',
        marginVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'

    },
    button_text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'

    },
    card: {
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 20,
        borderColor: '#DDD',
        width: '100%',
        marginTop: 10,
        borderRadius: 8,
    },
    card_title: {
        fontWeight: 'bold',
        fontSize: 14
    },
    card_text: {
        marginTop: 10,
    }
})