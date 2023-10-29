import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StudentProfileScreen = ({ route }) => {
  const { student } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={{ uri: student.image }} style={styles.photo} />
      <Text style={styles.name}>{student.name}</Text>
      <Text>Score: {student.grade}</Text>
      <Text>Absences: {student.absences}</Text>
      <Button
        title="Back to Gradebook"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default StudentProfileScreen;
