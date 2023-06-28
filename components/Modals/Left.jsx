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

const Left = ({ setModalLeft, modalLeft, styles }) => {
  return (
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
  );
};

export default Left;
