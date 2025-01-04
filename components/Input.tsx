interface InputProps {
  placeholder: string;
  value: string;
  type: string;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:React.FC<InputProps> = ({placeholder, value, type, disabled, onChange}) => {
  return (
    <input disabled={disabled} value={value} placeholder={placeholder} type={type} onChange={onChange} 
     className=" w-full p-4 text-md bg-black   outline-none text-white focus:text-xl transition disabled:bg-neutral-900
     disabled:opacity-70 disabled:cursor-not-allowed"
    />
  );
};

export default Input;
