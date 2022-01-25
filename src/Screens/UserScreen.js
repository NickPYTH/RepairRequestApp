import {View, Text, StyleSheet} from "react-native";

export const UserScreen = ({}) => {
    return(
        <View style={styles.marginTop}>
            <Text>
                User Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    marginTop: {
        marginTop: 500,
    }
})