import { Text, View, StyleSheet } from "react-native";
  const styles = StyleSheet.create({
      container:{
        backgroundColor: "#90caf9",
      },
      largeText: {
        fontSize: 30,
        color: "#f44336",
        marginBottom: 5,
        fontWight: "700",
        fontVariant: ["small-caps"],
      },
      mediumText:{
        fontSize: 20,
        color: "#9c27b0",
        marginBottom: 10,
        fontWeight: "500",
        textAlign: "right",
      },
      smallText:{
        fontSize: 15,
        color: "#2196f3",
        fontWeight: "400",
        textAlign: "center",
      },
    });
export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text sytle = {styles.smallText}> Entry Screen - Awesome </Text>
      <Text style = {styles.largeText}>TypeScript is great if you practice more</Text>
      <Text style ={ styles.mediumText}>React Native Provides You A Single Codebase for Cross Plartforms</Text>
      <Text style ={ styles.smallText}>ALX is awesome!</Text>


    </View>

    

  );
}
