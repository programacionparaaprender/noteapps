import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Your Sticky Notes</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerTitle: {
        color: Platform.OS === "android" ? "white" : "purple",
        fontSize: 30,
        fontWeight: "bold",
        padding: 10,
        marginTop: 10,
    },
    headerContainer:{
        width: "100%",
        height: "13%",
        backgroundColor: Platform.OS === "android" ? "purple" : "white",
        paddingTop: 30,
    }
})