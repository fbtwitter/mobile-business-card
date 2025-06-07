import { FontAwesome6 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProjectCard from "./src/components/ProjectCard";

export default function App() {
  const name = "Reza Fauzi Augusdi";
  const links = {
    github: "fbtwitter",
    email: "rzaugusdi354@gmail.com",
    x: "rzaugusdi",
  };
  const getOccupation = () => {
    return "Full-stack Developer";
  };

  const getIcons = () => {
    return (
      <View style={{ flexDirection: "row", marginVertical: 10, gap: 10 }}>
        {links.github && <FontAwesome6 name="github" size={24} color="black" />}
        {links.x && <FontAwesome6 name="x-twitter" size={24} color="black" />}
        {links.email && <FontAwesome6 name="at" size={24} color="black" />}
      </View>
    );
  };
  const onContactMe = () => {
    Linking.openURL("mailto:rzaugusdi354@gmail.com");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={{
                uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
              }}
              style={{ width: "100%", aspectRatio: 16 / 9 }}
            />
            <Image
              source={require("./assets/reza.jpeg")}
              style={{
                width: 150,
                height: 150,
                borderRadius: 150,
                borderWidth: 5,
                borderColor: "white",
                marginTop: -75,
              }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
            <Text>{getOccupation()}</Text>
            {getIcons()}
            <Button title="Contact me" onPress={onContactMe} />

            <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>

            <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>
              Projects
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, padding: 10 }}
            >
              <ProjectCard
                name="Todo App"
                image={require("./assets/projects/project1.jpeg")}
              />
              <ProjectCard
                name="Todo App 2"
                image={require("./assets/projects/project2.jpeg")}
              />
              <ProjectCard
                name="Todo App 3"
                image={require("./assets/projects/project3.jpeg")}
              />
              <ProjectCard
                name="Todo App"
                image={require("./assets/projects/project1.jpeg")}
              />
            </ScrollView>

            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
