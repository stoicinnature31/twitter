type InputType = "text" | "email" | "password" | "number" | "tel" | "url"; // add more types as needed

interface InputProps {
  placeholder: string;
  value: string;
  type: InputType;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, type, disabled, onChange }) => {
  const inputStyles = `w-full p-4 text-md bg-black outline-none text-white focus:text-xl transition focus:ring-2 focus:ring-blue-500 ${disabled ? 'disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed' : ''}`;

  return (
    <input
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      className={inputStyles}
    />
  );
};

export default Input;
