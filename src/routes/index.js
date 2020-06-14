import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import Navigator from "./navigator";

const Routes = createStackNavigator();

export function Stack() {
	const initialRouteName = null;

	return (
		<NavigationContainer ref = {Navigator}>
			<Routes.Navigator initialRouteName={initialRouteName}>

			</Routes.Navigator>
		</NavigationContainer>
	);
}
