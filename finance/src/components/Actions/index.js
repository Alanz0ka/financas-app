import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false} >
        
        <TouchableOpacity style={styles.actionButton}>
            <View>
                <AntDesign name="addfolder" size={26} color="#000" />
            </View>

            <Text style={styles.labelButtom}>Entradas</Text>
        </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop:18,

    }

})