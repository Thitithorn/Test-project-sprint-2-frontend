import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  return (
    // <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
    <div className="flex w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-[41px]">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-transparent py-2 mr-3 rounded outline-none"
      />

      {isShowPassword ? (
        <FaRegEye
          size={22}
          className="text-primary cursor-pointer"
          onClick={toggleShowPassword}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="text-slate-400 cursor-pointer"
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
};

export default PasswordInput;
