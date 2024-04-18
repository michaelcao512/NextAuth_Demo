import {getServerSession} from "next-auth";
import LogOutButton from "@/components/LogOutButton";
import Link from "next/link";

export default async function Profile(){
    const session = await getServerSession();

        if (!session){
            // users is not logged in
            return (
                <div>
                    <h1>Profile</h1>
                    <p>You need to be logged in to view this page</p>
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

