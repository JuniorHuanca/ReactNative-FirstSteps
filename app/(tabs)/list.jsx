import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, FONT, SIZES, SHADOWS } from "@/constants";
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
import ScreenHeaderBtn from "@/components/ScreenHeaderBtn";
import { useState } from "react";
import { DataList } from "@/utils/data";
import Right from "@/components/Modals/Right";
import Left from "@/components/Modals/Left";
const List = () => {
  const [modalLeft, setModalLeft] = useState(false);
  const [modalRight, setModalRight] = useState(false);
  const router = useRouter();

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

      <Right
        setModalRight={setModalRight}
        modalRight={modalRight}
        styles={styles}
      />
      <Left setModalLeft={setModalLeft} modalLeft={modalLeft} styles={styles} />
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>My Tecnologies</Text>
      </View>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={DataList}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => Linking.openURL(item.link)}
          >
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
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
