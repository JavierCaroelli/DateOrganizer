import React, { useState } from "react";
import { Alert, Text, View, TextInput, Button, TouchableHighlight, ScrollView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dateFormater from "./TimeFormatter";
import shortid from "shortid";
import styles from "./Styles";

const Formulario = ({ dates, setDates, setSeeForm }) => {
  const [patient, setPatient] = useState("");
  const [owner, setOwner] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [symptom, setSymptom] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmDate = (date) => {
    const dia = JSON.stringify(date);
    setDate(dateFormater(dia, "dia"));
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmTime = (time) => {
    const hora = JSON.stringify(time);
    setTime(dateFormater(hora, "hora"));
    hideTimePicker();
  };

  const addNewDate = () => {
    if (
      patient.trim() === "" ||
      owner.trim() === "" ||
      phone.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      symptom.trim() === ""
    ) {
      // Fails Validation
      Alert.alert(
        "Error", // Title
        "There are uncompleted Fields", // Message
        [
          {
            text: "OK", // Button's Array
          },
        ]
      );
      return;
    } else {
      const appointment = { patient, owner, phone, date, time, symptom };
      appointment.id = shortid.generate();
      const appointments = [...dates, appointment];
      setDates(appointments);
      setSeeForm(false);
    }
  };

  console.log(dates);
  return (
    <>
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Patient:</Text>
          <TextInput style={styles.input} onChangeText={(text) => setPatient(text)} />
        </View>
        <View>
          <Text style={styles.label}>Owner:</Text>
          <TextInput style={styles.input} onChangeText={(text) => setOwner(text)} />
        </View>
        <View>
          <Text style={styles.label}>Contact Phone:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPhone(text)}
            keyboardType="phone-pad"
          />
        </View>
        <View>
          <Text style={styles.label}>Date:</Text>
          <Button title="Show Date Picker" onPress={() => showDatePicker()} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmDate}
            onCancel={hideDatePicker}
            locale="es_ES"
          />
          <Text>{date}</Text>
        </View>
        <View>
          <Text style={styles.label}>Time:</Text>
          <Button title="Show Time Picker" onPress={() => showTimePicker()} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={confirmTime}
            onCancel={hideTimePicker}
            locale="es_ES"
            is24Hour
          />
          <Text>{time}</Text>
        </View>
        <View>
          <Text style={styles.label}>Symptoms:</Text>
          <TextInput multiline style={styles.input} onChangeText={(text) => setSymptom(text)} />
        </View>
        <View>
          <TouchableHighlight style={styles.addBtn} onPress={() => addNewDate()}>
            <Text style={styles.addBtnText}>ADD NEW DATE</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

export default Formulario;
