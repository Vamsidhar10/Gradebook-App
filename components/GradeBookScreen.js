import { StyleSheet, Text, View,FlatList,Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import GradebookEntry from './GradebookEntry';
import {fetchStudentDataFromFirestore} from './FirebaseFetcher';


export default function GradebookScreen({navigation}) {

  console.log("Entered Gradebook");

  const [gradebook, setGradeBook] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set isLoading to true when the data fetching starts
    setIsLoading(true);
  
    const fetchData = async () => {
      try {
        const data = await fetchStudentDataFromFirestore();
        setGradeBook(data);
      } catch (error) {
        // Handle any potential errors here
        console.error("Error fetching data:", error);
      } finally {
        // Set isLoading to false when the data fetching is complete (success or error)
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);
  


  const [totalBonusPoints, setTotalBonusPoints] = useState(0);

  let message='';
  if (totalBonusPoints >= 10) {
    message = "Lambos for everyone!";
  } else if (totalBonusPoints >= 5) {
    message = "Candy for everyone!";
  }
  let names=[
    "Vamsidhar",
    "Adarsha",
   "Hemeshwar",
    "Janmejay"
    
  ]
  return (

    <View style={styles.container}>
       <View style={styles.titleBar}>
        <Text style={styles.titleText}>Z101: Gradebook</Text>
      </View>
      <Text style={{paddingTop: 20}}>{message}</Text>
      {isLoading ? (
          <Text>Loading, Please Wait...</Text>
        ) : (
          <FlatList data={names} renderItem={
            ({item}) => <GradebookEntry name={item} setTotalBonusPoints={setTotalBonusPoints} gradebook={gradebook}/>
          }/>
        )}
      
     <Button
        title="Back to Title"
        onPress={() => navigation.navigate('Title')}
      />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0
  },
  titleBar: {
    backgroundColor: '#3498db',
    padding: 20
  },
  titleText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  }
});
