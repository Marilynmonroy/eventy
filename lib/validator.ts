import { z } from "zod";

export const formEventSchema = z.object({
  title: z.string().min(3, {
    message: "El título debe tener al menos 3 caracteres.",
  }),
  description: z
    .string()
    .min(3, {
      message: "La descripción debe tener al menos 3 caracteres.",
    })
    .max(200, {
      message: "La descripción debe tener menos de 200 caracteres.",
    }),
  location: z
    .string()
    .min(3, {
      message: "La ubicación debe tener al menos 3 caracteres.",
    })
    .max(200, {
      message: "La ubicación debe tener menos de 200 caracteres.",
    }),
  imageUrl: z.string(),
  startDataTime: z.date(),
  endDataTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});