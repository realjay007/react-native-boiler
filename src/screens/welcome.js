import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center"
	}
});

class Welcome extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Hello world!</Text>
			</View>
		);
	}
}

export default Welcome;