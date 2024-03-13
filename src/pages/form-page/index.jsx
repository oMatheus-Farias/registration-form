import { useState, useEffect } from "react";

import InputComponent from "../../components/input-component";
import ButtonSubmit from "../../components/button-submit";

const FormPage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [estates, setEstates] = useState([]);
  const [ufselected, setUfSelected] = useState(estates[0]);

  useEffect(() => {
    const getEstates = async () => {
      try {
        const response = await fetch(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
        );
        const data = await response.json();

        setEstates(data);
      } catch (error) {
        console.erroror(err);
      }
    };

    getEstates();
  }, []);

  const handleUfSelected = (estateSigla) => {
    const ufItem = estates.find((estate) => estate.sigla === estateSigla);

    setUfSelected(ufItem);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <section className="w-[90%] max-w-[40.62em] flex flex-col items-center rounded-xl overflow-hidden">
        <header className="w-full h-24 bg-secondaryColor flex justify-center items-center">
          <h1 className="text-whiteColor text-xl md:text-2xl font-bold">
            Formulário de Registro
          </h1>
        </header>
        <form className="w-full px-5 py-10 bg-primaryColor flex flex-col gap-5">
          <label>
            <InputComponent
              label="Primeiro Nome"
              type="text"
              placeholder="Digite seu primeiro nome"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            <InputComponent
              label="Sobrenome"
              type="text"
              placeholder="Digite seu sobrenome"
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-whiteColor font-medium">
              UF do local de nascimento:
            </span>
            <select
              className="py-2 rounded-md"
              onChange={(e) => handleUfSelected(e.target.value)}
            >
              {estates.map((estate) => (
                <option key={estate.id} value={estate.sigla}>
                  {estate.sigla}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="text-whiteColor font-medium">
              Município de nascimento:
            </span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label>
            <InputComponent
              label="E-mail"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <InputComponent
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <ButtonSubmit>Registrar</ButtonSubmit>
        </form>
      </section>
    </div>
  );
};

export default FormPage;
