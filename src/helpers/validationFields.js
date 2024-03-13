import { toast } from "react-toastify";

export const validationFields = (fields) => {
  const fieldsIsValid = fields.some((field) => field === "");

  if (fieldsIsValid) {
    toast.error("Preencha todos os campos!");
    return false;
  }

  return true;
};
