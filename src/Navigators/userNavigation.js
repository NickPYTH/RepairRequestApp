import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {UserScreen} from "../Screens/UserScreen";

const Stack = createNativeStackNavigator();

export const UserNavigation = ({}) => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserHome">
                <Stack.Screen name="UserHome" component={UserScreen} />
                <Stack.Screen name="UserCard" component={UserScreen} />
                <Stack.Screen name="UserAddCard" component={UserScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}