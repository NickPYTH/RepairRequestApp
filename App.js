import {NavigationBoss} from "./src/Navigators/NavigationBoss";
import {Provider} from "react-redux";
import {store} from "./src/store/reducersMerge";
import {StyleSheet, View} from "react-native";

export default function App() {
  return (
      <View style={styles.wrapper}>
          <Provider store={store}>
              <NavigationBoss />
          </Provider>
      </View>

  );
}

const styles = StyleSheet.create({
    wrapper: {
        height: "100%"
    },
})