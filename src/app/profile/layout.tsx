import React from "react";

export const metadata = {
    title: "Next-Auth | Profile",
    description: "User's profile page",
};

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <main>{children}</main>
    );
}