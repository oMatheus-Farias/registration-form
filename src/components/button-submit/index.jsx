const ButtonSubmit = ({ children }) => {
  return (
    <button
      type="submit"
      className="bg-greenColor text-lg text-whiteColor font-bold px-8 py-2 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out"
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
