import {z} from 'zod';

export const userSchema = z.object({
    name: z.string().min(2, 'Min 2 char length'),
    email: z.string().email( 'Min 2 char length'),
    password: z.string().min(8, 'Min 6 char length'),

})

export type UserFormData = z.infer<typeof userSchema>;