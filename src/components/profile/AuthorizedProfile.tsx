import Link from "next/link";
import LogOutButton from "@/components/LogOutButton";
import {getServerSession, Session} from "next-auth";
import {StyledP} from "@/StyledComponents";

export default async function AuthorizedProfile() {
    const session = await getServerSession();
    return (
        <div>
            <h1>Profile</h1>
            <StyledP>Welcome {session?.user?.name}</StyledP>
            <Link href="/public">To Home</Link>
            <LogOutButton/>
        </div>
    )
}