"use client"

import { signIn } from "next-auth/react"

export default function DefaultSignIn() {
    return (
        <button onClick={() => signIn()}> Click Here to Sign In! </button>
    )
}


