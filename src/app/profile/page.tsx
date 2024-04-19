import {getServerSession} from "next-auth";
import AuthorizedProfile from "@/components/profile/AuthorizedProfile";
import UnauthorizedProfile from "@/components/profile/UnauthorizeedProfile";

export default async function Profile() {
    const session = await getServerSession();
    console.log("Session: ", session);
    if (!session) {
        return (
            <>
                <UnauthorizedProfile/>
            </>
        )

    } else {
        return (
            <>
                <AuthorizedProfile/>
            </>
        )
    }
}

