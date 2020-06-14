import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import Navigator from "./navigator";
import Welcome from "../screens/welcome";

const Routes = createStackNavigator();

export default function Stack() {
	const initialRouteName = null;

	const globalScreenOptions = {
		headerShown: false,
	};

	const screens = [
		{
			component: Welcome,
			name: Welcome.name,
			options: globalScreenOptions,
		}
	];

	return (
		<NavigationContainer ref = {Navigator}>
			<Routes.Navigator initialRouteName={initialRouteName}>
				{screens.map((screen) => (
					<Routes.Screen
						key={screen.name}
						{...screen}
					/>
				))}
			</Routes.Navigator>
		</NavigationContainer>
	);
}
