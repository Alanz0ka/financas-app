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
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={26} color="#000" />
            </View>

            <Text style={styles.labelButtom}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="tagso" size={26} color="#000" />
            </View>

            <Text style={styles.labelButtom}>Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="creditcard" size={26} color="#000" />
            </View>

            <Text style={styles.labelButtom}>Carteira</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="barcode" size={26} color="#000" />
            </View>

            <Text style={styles.labelButtom}>Boletos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="setting" size={26} color="#000" />
            </View>

            <Text style={styles.labelButtom}>Conta</Text>
        </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop:18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton:{
        alignItems: 'center',
        marginRight: 32,
        
    },
    areaButton:{
        backgroundColor:'#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButtom:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold',
    }

})