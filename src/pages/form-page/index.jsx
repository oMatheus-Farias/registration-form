import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import InputComponent from "../../components/input-component";
import ButtonSubmit from "../../components/button-submit";
import Modal from "../../components/modal";

import { validationFields } from "../../helpers/validationFields";

const FormPage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [estates, setEstates] = useState([]);
  const [ufSelected, setUfSelected] = useState("");

  const [city, setCity] = useState([]);
  const [citySelected, setCitySelected] = useState("");

  const [open, setOpen] = useState(false);

  const formValues = [
    name,
    lastName,
    email,
    password,
    ufSelected,
    citySelected,
  ];

  useEffect(() => {
    const getEstates = async () => {
      try {
        const response = await fetch(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
        );
        const data = await response.json();

        setEstates(data);
        setUfSelected(data[0]?.sigla);
      } catch (error) {
        console.erroror(err);
      }
    };

    getEstates();
  }, []);

  useEffect(() => {
    const getCity = async () => {
      try {
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelected}/municipios`
        );

        const data = await response.json();
        setCity(data);
        setCitySelected(data[0]?.nome);
      } catch (error) {
        console.error(error);
      }
    };

    getCity();
  }, [ufSelected]);

  const handleUfSelected = (estateSigla) => {
    const ufItem = estates.find((estate) => estate.sigla === estateSigla);

    setUfSelected(ufItem?.sigla);
  };

  const handleCitySelected = (cityName) => {
    const cityItem = city.find((city) => city.nome === cityName);

    setCitySelected(cityItem?.nome);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formValidation = validationFields(formValues);

    if (formValidation) {
      setOpen(true);
      toast.success("Formulário enviado com sucesso!");
    }
  };

  const handleCloseModal = () => {
    setOpen(false);

    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center py-5">
        <section className="w-[90%] max-w-[40.62em] flex flex-col items-center rounded-xl overflow-hidden">
          <header className="w-full h-20 bg-secondaryColor flex justify-center items-center">
            <h1 className="text-whiteColor text-xl md:text-2xl font-bold">
              Formulário de Registro
            </h1>
          </header>
          <form
            className="w-full px-5 py-3 bg-primaryColor flex flex-col gap-5"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label>
              <InputComponent
                label="Primeiro Nome"
                type="text"
                placeholder="Digite seu primeiro nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label>
              <InputComponent
                label="Sobrenome"
                type="text"
                placeholder="Digite seu sobrenome"
                value={lastName}
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

            <label className="flex flex-col">
              <span className="text-whiteColor font-medium">
                Município de nascimento:
              </span>
              <select
                className="py-2 rounded-md"
                onChange={(e) => handleCitySelected(e.target.value)}
              >
                {city.map((city) => (
                  <option key={city.id} value={city.nome}>
                    {city.nome}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <InputComponent
                label="E-mail"
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              <InputComponent
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <div className="mt-2 ml-auto">
              <ButtonSubmit>Registrar</ButtonSubmit>
            </div>
          </form>
        </section>
      </div>
      <Modal
        open={open}
        handleCloseModal={handleCloseModal}
        formValues={formValues}
      />
    </>
  );
};

export default FormPage;
