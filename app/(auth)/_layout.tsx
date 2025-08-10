import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

const TabLayout = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="otp" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default TabLayout;
