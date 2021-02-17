import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // - - MainPage - -
  mainContainer: {
    backgroundColor: "#e5707e",
    paddingBottom: "2%",
    flex: 1,
  },
  btn: {
    backgroundColor: "#e8e9a1",
    alignItems: "center",
    padding: 3,
  },
  btnText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#e5707e",
  },
  title: {
    color: "#FFF",
    marginTop: 30,
    marginBottom: 15,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    flex: 1,
    marginHorizontal: "2.5%",
  },
  list: {
    flex: 1,
  },
  // - - FormPage - -
  form: {
    backgroundColor: "#fff",
    padding: "2.5%",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  input: {
    marginTop: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderColor: "#a3ddcb",
    borderWidth: 1,
    borderStyle: "solid",
  },
  addBtn: {
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#e8e9a1",
    alignItems: "center",
  },
  addBtnText: {
    color: "#e5707e",
    fontWeight: "bold",
  },
  //DateList
  listForm: { flexDirection: "row" },
  column: { flex: 1 },
  text: {
    fontSize: 18,
  },
  btnErase: {
    marginTop: 10,
    backgroundColor: "#e8e9a1",
    alignItems: "center",
    padding: 3,
  },
});

export default styles;

// const styles = StyleSheet.create({
//   turno: {
//     backgroundColor: "#FFF",
//     borderBottomColor: "#e1e1e1",
//     borderStyle: "solid",
//     borderBottomWidth: 5,
//     paddingHorizontal: 10,
//   },
//   label: {
//     fontWeight: "bold",
//     fontSize: 18,
//     marginTop: 20,
//   },
//   texto: { fontSize: 18 },
//   btnErase: {
// padding: 10,
// backgroundColor: "red",
// marginVertical: 20,
//   },
//   textErase: {
//     color: "#FFF",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });
