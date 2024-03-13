export const validationFields = (fields) => {
  const fieldsIsValid = fields.some((field) => field === "");

  if (fieldsIsValid) {
    alert("Preencha todos os campos");
    return false;
  }

  return true;
};
