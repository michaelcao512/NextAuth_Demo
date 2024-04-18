import {getServerSession} from "next-auth";
import LogOutButton from "@/components/LogOutButton";
import Link from "next/link";
import styled from "styled-components";


const StyledP = styled.p`
  color: darkred;
  font-size: 30pt;
  
`

export default async function Profile(){
    const session = await getServerSession();

        if (!session){
            // users is not logged in
            return (
                <div>
                    <h1>Profile</h1>
                    <StyledP>You need to be logged in to view this page</StyledP>
                    <Link href="/">To Login</Link>
                </div>
            )

        }
        return (
            <div>
                <h1>Profile</h1>
                <p>Welcome {session?.user?.name}</p>
                <Link href="/">To Home</Link>
                <LogOutButton/>
            </div>
        )

}

