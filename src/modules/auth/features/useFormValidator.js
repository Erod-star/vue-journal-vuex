import { reactive } from "@vue/reactivity";
const errors = reactive({});
export default function useFormValidation() {
  const validateNameField = (fieldName, fieldValue) => {
    errors[fieldName] =
      fieldValue === "" ? "El campo " + fieldName + " es requerido" : "";
  };
  return { errors, validateNameField };
}
