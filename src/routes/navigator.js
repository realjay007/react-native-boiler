import { StackActions } from "@react-navigation/native";

import * as React from "react";

export const navigator = React.createRef();

function navigate(name, params) {
	navigator.current?.navigate(name, params);
}

function reset(route, params) {
	navigator.current?.dispatch({
		...StackActions.replace(route, params),
	});
}

function pop() {
	const popAction = StackActions.pop(1);
	navigator.current?.dispatch(popAction);
}

function popToTop() {
	navigator.current?.dispatch(StackActions.popToTop());
}

export default {
	navigate,
	reset,
	pop,
	popToTop,
};
