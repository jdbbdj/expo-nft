import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { COLORS, NFTData } from "../../constants";
import { HomeHeader, FocusedStatusBar, NFTCard } from "../../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.secondary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
              border: "1px solid red",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
