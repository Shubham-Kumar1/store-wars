import * as z from "zod"

export const signInSchema = z.object(
    {
        identifier: z.string().email({message: "Please enter a valid email"}),
        password: z.string().min(8, {message: "Minimum 8 characters should be there in the password"}),
    }
)
