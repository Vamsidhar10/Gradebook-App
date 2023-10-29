import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TitleScreen from './components/Title';
import StudentProfile from './components/StudentProfile';
import GradebookScreen from './components/GradeBookScreen';
import { collection,getDocs,addDoc } from 'firebase/firestore';
import { FIREBASE_DB } from './firebaseConfig';



const Stack = createStackNavigator();

const App = () => {

  let gradebook = {
    vamsidhar:
    {
        name: 'Vamsidhar', grades: [100, 100, 100,91], absences: 3, projects: { 'ADT': 95, 'ADS': 98 }, grade:100,
        image:'https://picsum.photos/id/237/200/300'
    },
    adarsha:
    {
        name: 'Adarsha', grades: [99, 99, 99,100], absences: 4, projects: { 'IS': 80, 'ML': 70 }, grade: 90,
        image:'https://picsum.photos/seed/picsum/200/300'
    },
    hemeshwar:{
        name: 'Hemeshwar', grades: [99, 99, 99,100], absences: 2, projects: { 'IS': 80, 'ML': 70 }, grade: 98.5,
        image:'https://picsum.photos/200/300/?blur'
    },
    janmejay:{
        name: 'Janmejay', grades: [99, 99, 99,100], absences: 5, projects: { 'IS': 80, 'ML': 70 }, grade: 98.5,
        image:'https://picsum.photos/200/300?grayscale'
    }
   
}

const addStudentDataToFirestore = async () => {
  try {
    const studentsCollection = collection(FIREBASE_DB, 'students');
    const querySnapshot = await getDocs(studentsCollection);
    if (querySnapshot.empty) {
      for (const studentName in gradebook) {
        const studentData = gradebook[studentName];
        console.log("psuhing data");
        await addDoc(studentsCollection, studentData)
          .then((docRef) => {
            console.log(`Added data for ${studentName} with ID: ${docRef.id}`);
          })
          .catch((error) => {
            console.error(`Error adding data for ${studentName}: ${error}`);
          });
      }
    } else {
      console.log('Data already exists in Firestore. Skipping data addition.');
    }
  } catch (error) {
    console.error('Error adding student data to Firestore:', error);
  }
};

addStudentDataToFirestore();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Title">
        <Stack.Screen name="Title" component={TitleScreen} />
        <Stack.Screen name="GradebookScreen" component={GradebookScreen} />
        <Stack.Screen name="StudentProfile" component={StudentProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;