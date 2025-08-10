import Button from "@/components/Button";
import OtpInput from "@/components/OtpInput";
import React from "react";
import { Text, View } from "react-native";

const otp = () => {
  const handleContinue = () => {
    console.log("Continue Clicked!");
  };

  return (
    <View className="px-8 flex-col gap-2 flex pt-32 bg-white w-full h-full">
      {/* OTP */}
      <Text className="text-4xl font-robotobold text-primary_text leading-relaxed text-center font-Roboto">
        One-Time Password
      </Text>

      {/* Description */}
      <Text className="font-quicksand text-primary_text text-md text-center px-14 mt-1">
        Enter your OTP code to{"\n"}continue
      </Text>

      {/* OTP Input */}
      <View className="w-full mt-5">
        <OtpInput onTextChange={(code) => console.log(code)} />
      </View>

      {/* Dont Have an Account? */}
      <View className="w-full flex-row justify-center gap-1 my-2">
        <Text className="font-roboto">Didn't get the code?</Text>
        <Text className="text-primary underline font-roboto">Resend it</Text>
      </View>

      {/* Login Button */}
      <View className="w-full mt-5">
        <Button label="Continue" onPress={handleContinue} />
      </View>
    </View>
  );
};

export default otp;
