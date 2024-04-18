import {getServerSession} from "next-auth";
import AuthorizedProfile from "@/components/profile/AuthorizedProfile";
import UnauthorizedProfile from "@/components/profile/UnauthorizeedProfile";
import {StyledP} from "@/StyledComponents";


export default async function Profile() {
    const session = await getServerSession();

    if (!session) {
        return (
            <>
                <UnauthorizedProfile/>
            </>
        )

    } else {
        return (
            <>
                <AuthorizedProfile session={session}/>
            </>

        )

    }
}

