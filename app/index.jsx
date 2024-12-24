import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Button,
	Alert,
} from "react-native";
import ColorPicker, {
	Panel1,
	Swatches,
	Preview,
	OpacitySlider,
	HueSlider,
} from "reanimated-color-picker";
import MyButton from "../components/MyButton";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function App() {
	const [leftBgColor, setLeftBgColor] = useState("#fff");
	const [rightBgColor, setRightBgColor] = useState("#fff");
	const [leftScoreColor, setLeftScoreColor] = useState("red");
	const [rightScoreColor, setRightScoreColor] = useState("blue");

	const [leftScore, setLeftScore] = useState(0);
	const [rightScore, setRightScore] = useState(0);

	const handleSwitchSide = () => {
		// const l_score = leftScore;
		// const r_score = rightScore;
		// setLeftScore(r_score);
		// setRightScore(l_score);
		setLeftBgColor(rightBgColor);
		setRightBgColor(leftBgColor);
		setLeftScore(rightScore);
		setRightScore(leftScore);
		setLeftScoreColor(rightScoreColor);
		setRightScoreColor(leftScoreColor);
	};

	const handleClearScore = () => {
		Alert.alert("清空分數", "確定要清空分數嗎？", [
			{
				text: "取消",
			},
			{
				text: "確定",
				onPress: () => {
					setLeftScore(0);
					setRightScore(0);
				},
			},
		]);
	};

	return (
		<SafeAreaView style={[styles.fullScreen]}>
			<MyButton
				text={<Fontisto name="arrow-h" size={48} color="lightgrey" />}
				handlePress={() => {
					handleSwitchSide();
				}}
				containerStyle={styles.swapBtn}
			/>
			<MyButton
				text={"clear"}
				handlePress={() => {
					handleClearScore();
				}}
				containerStyle={styles.clearBtn}
			/>
			{/* =================== 左邊 =====================*/}
			<View style={[styles.left, { backgroundColor: leftBgColor }]}>
				<View
					style={[
						{ flexDirection: "row", gap: 100 },
						styles.leftBtnContainer,
					]}>
					<MyButton
						text="- 1"
						handlePress={() => {
							leftScore > 0 ? setLeftScore(leftScore - 1) : "";
						}}
						containerStyle={styles.adjustScoreButton}
					/>
				</View>
				<Text
					style={[styles.leftScore, { color: leftScoreColor }]}
					onPress={() => {
						setLeftScore(leftScore + 1);
					}}>
					{leftScore}
				</Text>
			</View>
			{/* =================== 右邊 =====================*/}
			<View style={[styles.right, { backgroundColor: rightBgColor }]}>
				<View
					style={[
						{ flexDirection: "row", gap: 100 },
						styles.rightBtnContainer,
					]}>
					<MyButton
						text="- 1"
						handlePress={() => {
							rightScore > 0 ? setRightScore(rightScore - 1) : "";
						}}
						containerStyle={styles.adjustScoreButton}
					/>
				</View>
				<Text
					style={[styles.rightScore, { color: rightScoreColor }]}
					onPress={() => {
						setRightScore(rightScore + 1);
					}}>
					{rightScore}
				</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	testMode: {
		borderColor: "red",
		borderWidth: 1,
	},
	fullScreen: {
		// position: "absolute",
		// top: 0,
		// left: 0,
		// right: 0,
		// bottom: 0,
		marginTop: 20,
		backgroundColor: "#fff",
		flexDirection: "row",
	},
	left: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	leftBtnContainer: {
		width: "70%",
		justifyContent: "flex-start",
	},
	leftScore: {
		fontSize: 250,
	},
	right: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	rightBtnContainer: {
		width: "70%",
		justifyContent: "flex-end",
	},
	rightScore: {
		fontSize: 250,
	},
	swapBtn: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
		// width: 70,
		// height: 40,
		zIndex: 20,
		// borderColor: "black",
		// borderWidth: 1,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
	},
	clearBtn: {
		position: "absolute",
		top: "10%",
		left: "50%",
		transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
		zIndex: 20,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
	},
	adjustScoreButton: {
		width: 40,
		height: 40,
		borderRadius: 5,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		// shadowColor: "#000",
		// shadowOffset: { width: 0, height: 2 },
		// shadowOpacity: 0.6,
		// shadowRadius: 2,
		borderColor: "black",
		borderWidth: 1,
	},
});
