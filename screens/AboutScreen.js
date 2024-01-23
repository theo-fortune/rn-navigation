import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AboutScreen({ route, navigation }) {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button
        title="Update the name"
        onPress={() =>
          navigation.setParams({
            name: "Czar",
          })
        }
      />
      <Button title="Go back with data" onPress={navigation.navigate("Home", { result: "Data From About"})}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
