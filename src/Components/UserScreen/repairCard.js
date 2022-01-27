import {View, Text, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import {LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR} from "../../themes";

export const RepairCard = ({}) => {
    return (
        <View style={styles.wrapper}>
            <SafeAreaView style={styles.scrollContainer}>
                <ScrollView>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
            flex: 1,
    },
    wrapper: {
        width: "95%",
        height: 100,
        marginVertical: 15,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: PRIMARY_COLOR,
        backgroundColor: LIGHT_COLOR,
    }
})