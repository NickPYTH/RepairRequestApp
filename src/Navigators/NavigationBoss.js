import {StyleSheet, Text} from "react-native";
import {UserNavigation} from "./userNavigation";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {LoginScreen} from "../Screens/LoginScreen";
import {AdminNavigation} from "./adminNavigation";

const NavigationBossLayout = ({info}) => {
    if (info.isAuth) {
        if (info.role === "admin") {
            return (
                <AdminNavigation />
            )
        } else if (info.role === "user") {
            return (
                <UserNavigation />
            )
        }
    }
    else{
        return (
            <LoginScreen />
        )
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
        },
        dispatch
    );

const mapStateToProps = (state) => {
    const info = state.loginScreenReducer;
    return { info };
};

export const NavigationBoss = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationBossLayout);