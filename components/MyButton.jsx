import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const MyButton = ({ containerStyle, text, handlePress }) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			style={containerStyle}
			activeOpacity={0.6}>
			<Text style={styles.btnText}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	btnText: {
		// textAlign: "center",
		// borderColor: "black",
		// borderWidth: 1,
	},
});

export default MyButton;
