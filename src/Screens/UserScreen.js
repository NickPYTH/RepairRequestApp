import {View, Text, StyleSheet} from "react-native";
import {RepairCard} from "../Components/UserScreen/repairCard";

export const UserScreen = ({}) => {
    return(
        <View style={styles.cardListWrapper}>
            <RepairCard />
        </View>
    )
}



const styles = StyleSheet.create({
    cardListWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
    }
})