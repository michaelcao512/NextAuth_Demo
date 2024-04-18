"use client"
import React, {useEffect, useState} from "react";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function LoginForm() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [errorMessage, setErrorMessage] = useState("");
        const router = useRouter();
        async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();

            const signInData = await signIn('credentials', {
                email: email,
                password: password,
                // callbackUrl: '/profile'
                redirect: false

            });
            if(signInData?.ok === false){
                // if user is unauthorized
                setErrorMessage("Invalid login credentials")
            } else {
                // if user is authorized
                setErrorMessage("")
                router.push("/profile");
            //     redirect to a home page
            }
        }

    useEffect(() => {
    }, [errorMessage]);

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                    <p>{errorMessage}</p>
                </form>
            </div>
        )
}




