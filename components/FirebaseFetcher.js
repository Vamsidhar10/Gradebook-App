import { collection,getDocs } from 'firebase/firestore';
import { FIREBASE_DB } from '../firebaseConfig';

export const fetchStudentDataFromFirestore = async () => {
    console.log("In fetchStudentDataFromFirestore");
    const studentsCollection = collection(FIREBASE_DB, 'students');
    try {
      const querySnapshot = await getDocs(studentsCollection);
      const students = [];
  
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        students.push(data);
      });
      const jsonObject = {};
         students.forEach(item => {
        jsonObject[item.name] = item;
    });
      return jsonObject;
    } catch (error) {
      console.error('Error fetching student data from Firestore:', error);
      return [];
    }
  };