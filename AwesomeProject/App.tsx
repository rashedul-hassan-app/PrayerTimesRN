import React from "react";

import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
	return (
		<SafeAreaView style={styles.safeArea}>
      <Text style={styles.heading}>Here are some boxes of different colours</Text>
        <View style={[styles.cyan, styles.box ]}>
          <Text style={styles.text}>Cyan</Text>
        </View>
        <View style={[ styles.blue, styles.box ]}>
          <Text style={styles.text}>Cyan</Text>
        </View>
        <View style={[  styles.magenta, styles.box ]}>
          <Text style={styles.text}>Cyan</Text>
        </View>
        <View style={[  styles.orange, styles.box ]}>
          <Text style={styles.text}>Cyan</Text>
        </View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    margin: 10
  },
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  text: {
    color: 'white'
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    // flex: 1,
  },
  safeArea: {
    flex: 2,
  },
  cyan: {
    padding: 10,
    backgroundColor: 'cyan',
    color: 'white'
  },
  blue: {
    backgroundColor: '#268bd2'
  },
  magenta: {
    backgroundColor: '#d33682'
  },
  orange: {
    backgroundColor: '#cb4b16'
  },
});
export default App;
