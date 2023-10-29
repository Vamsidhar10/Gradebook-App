import { StyleSheet, Text, View, Image } from 'react-native';

export default function StudentCard({image}){
    return(
        <View>
            <Image source={{uri:image}} alt="https://picsum.photos/id/237/200/300}" style={{width:90, height:90}} />       
        </View>
    );
}
