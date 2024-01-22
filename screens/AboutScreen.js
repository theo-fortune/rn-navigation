import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AboutScreen({ route }) {
  const navigation = useNavigation();
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
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
