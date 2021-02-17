import React from "react";
import { Text, View, TouchableHighlight } from "react-native";
import styles from "./Styles";

const Turno = ({ turno, deletePatient }) => {
  const dialogErase = (id) => {
    console.log(`Eliminando....${id}`);
    deletePatient(id);
  };

  return (
    <View style={styles.form}>
      <View style={styles.listForm}>
        <View style={styles.column}>
          <Text style={styles.label}>Patient: </Text>
          <Text style={styles.text}>{turno.patient}</Text>
          <Text style={styles.label}>Owner: </Text>
          <Text style={styles.text}>{turno.owner}</Text>
          <Text style={styles.label}>Symptoms: </Text>
          <Text style={styles.text}>{turno.symptom}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Date: </Text>
          <Text style={styles.text}>{turno.date}</Text>
          <Text style={styles.label}>Time: </Text>
          <Text style={styles.text}>{turno.time} hr</Text>
        </View>
      </View>
      <View>
        <TouchableHighlight onPress={() => dialogErase(turno.id)} style={styles.btnErase}>
          <Text style={styles.btnText}>Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Turno;
