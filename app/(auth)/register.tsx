import Button from "@/components/Button";
import InputFields from "@/components/InputFields";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

// SVG Imports

const register = () => {
  const router = useRouter();

  return (
    <View className="px-8 flex-col gap-2 flex pt-32 bg-white w-full h-full">
      {/* Login */}
      <Text className="text-5xl font-robotobold text-primary_text leading-relaxed text-center font-Roboto">
        Sign up
      </Text>

      {/* Description */}
      <Text className="font-quicksand text-primary_text text-md text-center px-14 mt-1">
        Create your account
      </Text>

      {/* Credential Inputs */}
      <View className="w-full flex-col mt-5 gap-4">
        <InputFields placeholder="First Name" />
        <InputFields placeholder="Last Name" />
        <InputFields placeholder="Email or Phone Number" />
        <InputFields placeholder="Password" />
      </View>

      {/* Register Button */}
      <View className="w-full mt-5">
        <Button label="Sign up" onPress={() => router.navigate('/otp')} />
      </View>

      {/* Already Have an Account? */}
      <View className="w-full flex-row justify-center gap-1 my-2">
        <Text className="font-roboto">Already have an account?</Text>
        <Link href={"/login"}>
          <Text className="text-primary underline font-roboto">
            Sign in here
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default register;
