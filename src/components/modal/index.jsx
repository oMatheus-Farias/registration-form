const Modal = ({ open, handleCloseModal, formValues }) => {
  return (
    <div
      className="w-full h-screen absolute top-0 left-0 z-10 bg-blackTransparent flex justify-center items-center transition-all"
      style={{ visibility: open ? "visible" : "hidden", opacity: open ? 1 : 0 }}
    >
      <section className="w-[90%] max-w-[40.37em] bg-lightColor rounded-xl px-4 py-6">
        <header className="w-full flex justify-between">
          <h1 className="md:text-lg font-bold">Seus dados enviados:</h1>

          <button className="font-bold text-red-500" onClick={handleCloseModal}>
            Fechar
          </button>
        </header>

        <div className="mt-4 flex flex-col gap-3">
          <p>
            <strong>Nome:</strong> {`${formValues[0]} ${formValues[1]}`}
          </p>
          <p>
            <strong>Email:</strong> {formValues[2]}
          </p>
          <p>
            <strong>Estado:</strong> {formValues[4]}
          </p>
          <p>
            <strong>Cidade:</strong> {formValues[5]}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Modal;
