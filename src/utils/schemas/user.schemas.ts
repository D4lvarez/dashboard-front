import { object, string, number } from "yup";

export const CreateUserSchema = object({
  name: string().required("Es necesario el nombre completo.").trim(),
  email: string()
    .email("No cumple con el formato de correo.")
    .required("Es necesario el correo de usuario."),
  department: number()
    .required("Es necesario el departamento del usuario")
    .positive()
    .integer()
    .min(1),
  password: string()
    .required("La contraseña es necesaria.")
    .min(8, "Debe tener al menos 8 caracteres.")
    .max(16),
});

export const LoginUserSchema = object({});
