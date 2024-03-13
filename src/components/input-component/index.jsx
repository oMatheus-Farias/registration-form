const InputComponent = ({ label, type, placeholder, value, onChange }) => {
  return (
    <>
      <span className="text-whiteColor font-medium">{`${label}:`}</span>
      <input
        className="w-full p-2 border border-gray-300 rounded-md"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};

export default InputComponent;
