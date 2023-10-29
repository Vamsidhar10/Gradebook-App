import { StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native';
import StudentCard from './StudentCard';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';






export default function GradebookEntry({name,setTotalBonusPoints,gradebook}){

console.log("In gradebook entry");
console.log(gradebook);
  const navigation = useNavigation();

    const [bonusPoints,setBonusPoints] = useState(0);
    const handlePress = () => {
      navigation.navigate('StudentProfile',{student:gradebook[name]});
    };

    return(
      <TouchableOpacity onPress={handlePress}>  
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Text style={styles.name}>{gradebook[name].name}</Text>
                <StudentCard image={gradebook[name].image} />
            </View>
            <View style={styles.infoContainer}>
                {/* <StudentGradeInfo grade={gradebook[name].grade} absences={gradebook[name].absences} /> */}
                <View style={styles.gradeInfoContainer}>
                    <Text style={styles.grade}>Grade: {gradebook[name].grade + bonusPoints}</Text>
                </View>
                <View style={styles.otherInfoContainer}>
                        <View style={styles.absenceContainer}>
                            <Text style={styles.absences}>Absences: {gradebook[name].absences}</Text>
                        </View>
                        <View style={styles.bonusContainer}>
                            <Button style={styles.button} title='Award Bonus Point' onPress={()=>{
                                setBonusPoints(bonusPoints+1);
                                setTotalBonusPoints((prevPoints) => prevPoints + 1);
                            }}/>
                        </View>  
                </View>
            </View>
        </View>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    container: {
      margin: 10,
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#f0f0f0',
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 2,
    },
    name: {
      fontSize: 17,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    button: {
      backgroundColor: '#3498db',
      borderRadius: 5,
      marginTop: 10,
      alignItems: 'center',
    },
    imageContainer: {
      width: '30%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginRight: 10,
      backgroundColor: '#ecf0f1',
    },
    infoContainer: {
      width: '70%',
      flexDirection: 'column',
    },
    gradeInfoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex:1
    },
    otherInfoContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      flex: 1
    },
    absenceContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    bonusContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    grade: {
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold'
      },
    
      absences: {
          fontSize: 16,
          color: 'red',
          fontWeight: 'bold'
        }
  });
  