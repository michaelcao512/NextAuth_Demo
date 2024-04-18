import LoginForm from "@/components/LoginForm";
import LogOutButton from "@/components/LogOutButton";
import {getServerSession} from "next-auth";
import Link from "next/link";

export default async function Home() {

    //   session management on server components
    const session = await getServerSession();
    console.log(session)
    if (!session) {
        return (
            <>
                <h1>Home</h1>
                <LoginForm/>
            </>
        );
    }
    // if user is logged in
    else {
        return (
            <div>
                <h1>Welcome {session.user?.name}</h1>
                <Link href="/profile">To Profile </Link>
                <LogOutButton/>
            </div>
        )
    }


}
