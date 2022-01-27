import {Text, StyleSheet} from "react-native"
import {DARK_COLOR} from "../../themes";

export const LogoTitle = ({title}) => {
    return (
        <Text style={styles.text}>
            {title}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: DARK_COLOR
    }
})