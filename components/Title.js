import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TitleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.courseName}>CROSS PLATFORM MOBILE COMPUTING</Text>
      <Text style={styles.description}>
        Welcome to the app! Tap the button below to navigate to the Gradebook screen.
      </Text>
      <Button
        title="Go to Gradebook"
        onPress={() => navigation.navigate('GradebookScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },
});

export default TitleScreen;
