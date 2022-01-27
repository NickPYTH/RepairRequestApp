import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {UserScreen} from "../../Screens/UserScreen";
import {AdminScreen} from "../../Screens/AdminScreen";

const Stack = createNativeStackNavigator();

export const AdminNavigation = ({}) => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AdminHome">
                <Stack.Screen name="AdminHome" component={AdminScreen} />
                <Stack.Screen name="AdminCard" component={AdminScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}