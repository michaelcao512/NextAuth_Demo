import Link from "next/link";
import {StyledP} from "@/StyledComponents";

export default function UnauthorizedProfile() {
    return (
        <div>
            <h1>Profile</h1>
            <StyledP>You need to be logged in to view this page</StyledP>
            <Link href="/">To Login</Link>
        </div>
    )
}