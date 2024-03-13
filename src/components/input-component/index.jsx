const InputComponent = ({ label, type, placeholder, onChange }) => {
  return (
    <>
      <span className="text-whiteColor font-medium">{`${label}:`}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-md"
        onChange={onChange}
        required
      />
    </>
  );
};

export default InputComponent;
