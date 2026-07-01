import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email("Inavlid email address"),
  password: z
    .string()
    .min(10, "Please, create password of at least 10 characters"),
});
