import Link from "next/link";
import LogOutButton from "@/components/LogOutButton";
import {getServerSession, Session} from "next-auth";
import {StyledP} from "@/StyledComponents";
import Wordle from "@/components/Wordle";

export default async function AuthorizedProfile() {
    const session = await getServerSession();

    const name = session?.user?.name || "no name";
    return (
        <div>
            <h1>Profile</h1>
            <StyledP>Welcome {name}</StyledP>
            <Wordle name={name}/>
            <LogOutButton/>
        </div>
    )
}