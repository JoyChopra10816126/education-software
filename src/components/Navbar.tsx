"use client";
import React from 'react';
import TopNavigation from "@cloudscape-design/components/top-navigation";

export default function Navbar() {
    return (
        <TopNavigation
            identity={{
                href: "/",
                title: "Science of self realisation",
            }}
            utilities={[
                {
                    type: "button",
                    iconName: "notification",
                    ariaLabel: "Notifications",
                    badge: true,
                    disableUtilityCollapse: false
                },
                {
                    type: "button",
                    iconName: "settings",
                    title: "Settings",
                    ariaLabel: "Settings"
                },
                {
                    type: "menu-dropdown",
                    iconName: "user-profile",
                    text: "User",
                    ariaLabel: "Profile",
                    onItemClick: () => { },
                    items: [
                        { id: "profile", text: "Profile" },
                        { id: "preferences", text: "Preferences" },
                        { id: "security", text: "Security" },
                        {
                            id: "support-group", text: "Support", items: [
                                { id: "documentation", text: "Documentation" },
                                { id: "feedback", text: "Feedback" }
                            ]
                        },
                        { id: "signout", text: "Sign out" }
                    ]
                }
            ]}
        />
    );
}
