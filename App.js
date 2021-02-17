import React, { useState } from "react";
import { Text, FlatList, View, TouchableHighlight } from "react-native";
import Turno from "./components/Turno";
import Form from "./components/Form";
import styles from "./components/Styles";

export default function App() {
  const [turno, setTurno] = useState([]);
  const [seeForm, setSeeForm] = useState(true);

  // Delete patients turn
  const deletePatient = (id) => {
    setTurno((turnosActivos) => {
      return turnosActivos.filter((turno) => turno.id !== id);
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Dates Organizer</Text>
      <TouchableHighlight onPress={() => setSeeForm(!seeForm)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>{!seeForm ? "CREATE NEW DATE" : "SEE DATES"}</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.content}>
        {seeForm ? (
          <>
            <Text style={styles.title}>Create a New Date</Text>
            <Form dates={turno} setDates={setTurno} setSeeForm={setSeeForm} />
          </>
        ) : (
          <>
            <Text style={styles.title}>
              {turno.length > 0 ? "UpComming Dates" : "No Dates to Show "}
            </Text>
            <FlatList
              style={styles.list}
              data={turno}
              keyExtractor={(turno) => turno.id}
              renderItem={({ item }) => <Turno turno={item} deletePatient={deletePatient} />}
            />
          </>
        )}
      </View>
    </View>
  );
}
