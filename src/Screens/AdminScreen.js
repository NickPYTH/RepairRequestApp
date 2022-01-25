import {View, Text, StyleSheet} from "react-native";

export const AdminScreen = ({}) => {
    return(
        <View style={styles.marginTop}>
            <Text>
                Admin Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    marginTop: {
        marginTop: 500,
    }
})