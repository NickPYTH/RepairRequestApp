import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {UserScreen} from "../../Screens/UserScreen";
import {Button} from "react-native";
import {LogoTitle} from "./logoTitle";
import {PRIMARY_COLOR} from "../../themes";

const Stack = createNativeStackNavigator();

export const UserNavigation = ({}) => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserHome">
                <Stack.Screen
                    name="UserHome"
                    component={UserScreen}
                    options={{
                        headerTitle: props => <LogoTitle title="Список тикетов" />,
                        /*headerRight: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Добавить"
                                color={PRIMARY_COLOR}
                            />
                        ),*/
                    }}
                />
                <Stack.Screen name="UserCard" component={UserScreen} />
                <Stack.Screen name="UserAddCard" component={UserScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}