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
  Image,
} from "react-native";
import ScreenHeaderBtn from "@/components/ScreenHeaderBtn";
import { useState } from "react";
import { DataList } from "@/utils/data";
const List = () => {
  const [modalLeft, setModalLeft] = useState(false);
  const [modalRight, setModalRight] = useState(false);

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
              handlePress={() => setModalLeft(!modalLeft)}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              handlePress={() => setModalRight(!modalRight)}
            />
          ),
          headerTitle: "",
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalLeft}
        onRequestClose={() => {
          setModalLeft(!modalLeft);
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
              handlePress={() => setModalLeft(!modalLeft)}
            />
            <Text style={styles.welcomeMessage}>Menu</Text>

            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              handlePress={() => setModalRight(!modalRight)}
            />
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalRight}
        onRequestClose={() => {
          setModalRight(!modalRight);
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
              handlePress={() => setModalRight(!modalRight)}
            />
            <Text style={styles.welcomeMessage}>Cuenta</Text>
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Image
                source={images.profile}
                resizeMode="cover"
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              />
              <Text
                style={{
                  fontFamily: FONT.bold,
                  fontSize: SIZES.xxLarge,
                  color: COLORS.white,
                }}
              >
                Perfil
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text
                style={{
                  fontFamily: FONT.bold,
                  fontSize: SIZES.large,
                  color: COLORS.white,
                }}
              >
                Notificaciones
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text
                style={{
                  fontFamily: FONT.bold,
                  fontSize: SIZES.large,
                  color: COLORS.white,
                }}
              >
                Ayuda
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text
                style={{
                  fontFamily: FONT.bold,
                  fontSize: SIZES.large,
                  color: COLORS.white,
                }}
              >
                Configuración de la cuenta
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text
                style={{
                  fontFamily: FONT.bold,
                  fontSize: SIZES.large,
                  color: COLORS.white,
                }}
              >
                Cerrar sesión
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>My Tecnologies</Text>
      </View>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={DataList}
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
