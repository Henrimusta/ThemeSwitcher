import React from "react";
import { View } from "react-native";
import { useTheme } from "../context/UseTheme";
import Styles from "../Styles";
import ThemeSwitchButton from "../components/ThemeSwitchButton";


export default function Settings() {
    const { isDarkMode } = useTheme();
    return (
        <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
            <ThemeSwitchButton />
        </View>
    );
}


