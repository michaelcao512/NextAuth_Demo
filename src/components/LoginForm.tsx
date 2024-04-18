"use client"
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
`;

const StyledInput = styled.input`
  padding: 5px;
  margin-left: 10px;
  margin-right: 20px;
  border-radius: 5px;
  border-color: #c4c4c4;
  border-width: thin;
  text-shadow: black;
`

const StyledButton = styled.button`
  padding: 5px 20px 5px 20px;
  border-radius: 4px;
  border-width: thin;
  background-color: black;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  box-shadow: black;
`

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`

const StyledLabel = styled.label`
  font-family: 'Poppins', sans-serif;
`

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
    if (signInData?.ok === false) {
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
        <InputDiv>
          <label>Email</label>
          <StyledInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <StyledInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </InputDiv>
        <StyledButton type="submit">Login</StyledButton>
        <p>{errorMessage}</p>
      </form>
    </div>
  )
}