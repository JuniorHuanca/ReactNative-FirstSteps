import { Stack } from "expo-router";
import { COLORS, icons, images, FONT, SIZES, SHADOWS } from "@/constants";
import {
  View,
  Text,
  SafeAreaView,
  SectionList,
  StyleSheet,
  StatusBar,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import ScreenHeaderBtn from "@/components/ScreenHeaderBtn";
import { useState } from "react";
const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const DATA = [
    {
      title: "Frontend",
      data: [
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "React",
        "Redux",
        "Bootstrap",
        "Sass",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend",
      data: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "Sequealize",
        "TypeScript",
      ],
    },
    {
      title: "Mobile",
      data: ["React Native"],
    },
    {
      title: "Learning",
      data: ["React Native", "Prisma", "TypeScript"],
    },
    {
      title: "Otros",
      data: ["Git", "Bash"],
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={() => setModalVisible(!modalVisible)}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <ScreenHeaderBtn
              iconUrl={icons.close}
              dimension="70%"
              handlePress={() => setModalVisible(!modalVisible)}
            />
            <Text style={styles.welcomeMessage}>Menu</Text>
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Configuración</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Notificaciones</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ajustes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ayuda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Cerrar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>My Tecnologies</Text>
      </View>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  containerMenu: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.white,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  item: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.white,
    marginVertical: SIZES.small,
    marginHorizontal: SIZES.small,
    ...SHADOWS.medium,
  },
  header: {
    borderRadius: SIZES.small,
    color: COLORS.white,
    padding: SIZES.small,
    marginVertical: 6,
    backgroundColor: COLORS.primary,
    fontFamily: FONT.medium,
    fontSize: SIZES.xLarge,
    width: "auto",
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 8,
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
  },
});

export default List;
