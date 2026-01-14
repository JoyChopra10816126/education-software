"use client";
import React from 'react';
import Cards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";
import Link from "@cloudscape-design/components/link";

interface Module {
    id: string;
    name: string;
    description: string;
}

const modulesData: Module[] = [
    { id: "canto-1", name: "Canto 1: Creation", description: "" },
    { id: "canto-2", name: "Canto 2: The Cosmic Manifestation", description: "" },
    { id: "canto-3", name: "Canto 3: The Status Quo", description: "" },
    { id: "canto-4", name: "Canto 4: The Creation of the Fourth Order", description: "" },
    { id: "canto-5", name: "Canto 5: The Creative Impetus", description: "" },
    { id: "canto-6", name: "Canto 6: Prescribed Duties for Mankind", description: "" },
    { id: "canto-7", name: "Canto 7: The Science of God", description: "" },
    { id: "canto-8", name: "Canto 8: Withdrawal of the Cosmic Creations", description: "" },
    { id: "canto-9", name: "Canto 9: Liberation", description: "" },
    { id: "canto-10", name: "Canto 10: The Summum Bonum", description: "" },
    { id: "canto-11", name: "Canto 11: General History", description: "" },
    { id: "canto-12", name: "Canto 12: The Age of Deterioration", description: "" },
];

interface ModulesProps {
    hideHeader?: boolean;
}

export default function Modules({ hideHeader = false }: ModulesProps) {
    return (
        <Cards
            ariaLabels={{
                itemSelectionLabel: (e, t) => `select ${t.name}`,
                selectionGroupLabel: "Item selection"
            }}
            cardDefinition={{
                header: item => (
                    <Link href={`/modules/${item.id}`} fontSize="heading-m">
                        {item.name}
                    </Link>
                ),
                sections: [
                    {
                        id: "description",
                        content: item => item.description
                    }
                ]
            }}
            cardsPerRow={[
                { cards: 1 },
                { minWidth: 500, cards: 3 }
            ]}
            items={modulesData}
            loadingText="Loading resources"
            empty={
                <Box textAlign="center" color="inherit">
                    <b>No modules</b>
                    <Box padding={{ bottom: "s" }} variant="p" color="inherit">
                        No modules available to display.
                    </Box>
                </Box>
            }
            header={!hideHeader && <Header variant="h2">Śrīmad-Bhāgavatam</Header>}
        />
    );
}
