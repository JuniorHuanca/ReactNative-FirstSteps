import {
  View,
  Text,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { COLORS, icons, images, FONT, SIZES, SHADOWS } from "@/constants";
import ScreenHeaderBtn from "@/components/ScreenHeaderBtn";

const Right = ({ setModalRight, modalRight, styles }) => {
  return (
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
  );
};

export default Right;
