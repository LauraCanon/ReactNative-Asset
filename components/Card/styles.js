import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    marginBottom: 8,
    marginTop: StatusBar.currentHeight || 0,
  },
  containerInfo: {
    flex: 1,
    paddingLeft: 15,
  },
  picture: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  containerTags: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tag: {
    backgroundColor: "lavender",
    borderRadius: 15,
    padding: 6,
    marginTop: 20,
  },
  author: {
    marginTop: 2,
    fontStyle: "italic",
  },
  about: {
    fontSize: 15,
    fontWeight: "bold",
  },
  containerComment: {
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  comment: {
    marginTop: 8,
    marginLeft: 8,
  },
  pictureComment: {
    marginTop: 8,
    width: 18,
    height: 18,
  },
});

export default styles;
