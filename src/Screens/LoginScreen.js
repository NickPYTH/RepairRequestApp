import {View, Button, Text, StyleSheet, Image, TextInput} from "react-native";
import {DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR} from "../themes";
import React, {useState} from "react";
import {Picker} from "@react-native-picker/picker";

export const LoginScreen = ({}) => {
    const [login, setLogin] = useState(null);
    const [password,setPassword] = useState("");
    return(
        <View style={styles.wrapper}>
            <View style={styles.card}>
                    <View style={styles.logo}>
                        <Image
                            source={require("../assets/LoginScreen/logo.png")}
                            style={{ width: 50, height: 50 }}
                        />
                    </View>
                    <View style={styles.centeredWrapper}>
                        <View style={styles.inputWrapper}>
                            <Picker
                                selectedValue={login}
                                style={{ height: 50, width: "100%", color: DARK_COLOR }}
                                onValueChange={(itemValue, itemIndex) => setLogin(itemValue)}
                            >
                                <Picker.Item label={"Выберите филиал"} value={null} />
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                                <Picker.Item label="Java" value="java" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.centeredWrapper}>
                        <View style={styles.inputWrapper}>
                            <TextInput placeholder="Введите пароль" style={styles.input} secureTextEntry={true} value={password} onChange={(val)=>setPassword(val)}/>
                        </View>
                    </View>
                    <View style={{...styles.centeredWrapper, marginTop: 20}}>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.btnText}>Войти</Text>
                    </View>
                </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: PRIMARY_COLOR
    },
    card: {
        width: "90%",
        height: 400,
        backgroundColor: LIGHT_COLOR,
        borderRadius: 15,
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30
    },
    centeredWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    inputWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderColor: PRIMARY_COLOR,
        borderWidth: 1,
        width: 250,
        height: 50,
        padding: 5,
        borderRadius: 15
    },
    input: {
        width: "90%",
        height: 50,
        color: DARK_COLOR
    },
    text: {
        fontSize: 18,
        color: DARK_COLOR
    },
    btnText: {
        fontSize: 20,
        color: PRIMARY_COLOR
    }
})