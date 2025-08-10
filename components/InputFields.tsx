import { LucideIcon } from "lucide-react-native";
import React from "react";
import { TextInput, View } from "react-native";

interface InputFieldProps {
  icon?: LucideIcon;
  placeholder?: string;
  endIcon?: LucideIcon;
}

const InputFields = ({
  icon: Icon,
  placeholder = "Input Field",
  endIcon: EndIcon,
}: InputFieldProps) => {
  return (
    <View className="w-full bg-secondary flex-row items-center border-gray-600/10 border border-1 rounded-md px-4 py-2 gap-2">
      {/* Icon with manual color styling lucide doesn't support nativewind atm */}
      {Icon && <Icon size={20} color="rgba(180, 187, 199, 1)" />}
      {/* Text Input */}
      <TextInput placeholder={placeholder} className="text-md placeholder:text-black/35 placeholder-shown:text-black flex-1"/>
      {EndIcon && <EndIcon size={20} color="rgba(180, 187, 199, 1)" />}
    </View>
  );
};

export default InputFields;
