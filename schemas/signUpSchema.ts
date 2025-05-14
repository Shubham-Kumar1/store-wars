import * as z from "zod"

export const signUpSchema = z.object(
    {
        email: z.string().email({message: "Please enter a valid email"}),
        password: z.string().min(8, {message: "Minimum 8 characters should be there in the password"}),
        passwordConfirmation: z.string().min(8, {message: "Please Confirm your password"})
    }
)
.refine((data) => data.password === data.passwordConfirmation, {
    message: "Password didn't match",
    path: ["passwordConfirmation"]
})
