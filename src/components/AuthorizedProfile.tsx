"use client"
import Link from "next/link";
import LogOutButton from "@/components/LogOutButton";
import {Session} from "next-auth";
import {StyledP} from "@/StyledComponents";

export default function AuthorizedProfile( props: {session: Session}) {
    return (
        <div>
            <h1>Profile</h1>
            <StyledP>Welcome {props.session?.user?.name}</StyledP>
            <Link href="/">To Home</Link>
            <LogOutButton/>
        </div>
    )
}