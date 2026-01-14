"use client";
import React from 'react';
import AppLayout from "@cloudscape-design/components/app-layout";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Icon from "@cloudscape-design/components/icon";
import { useParams } from 'next/navigation';

const canto1Chapters = [
    { number: 1, title: "Questions by the Sages" },
    { number: 2, title: "Divinity and Divine Service" },
    { number: 3, title: "Kṛṣṇa Is the Source of All Incarnations" },
    { number: 4, title: "The Appearance of Śrī Nārada" },
    { number: 5, title: "Nārada’s Instructions on Śrīmad-Bhāgavatam for Vyāsadeva" },
    { number: 6, title: "Conversation Between Nārada and Vyāsadeva" },
    { number: 7, title: "The Son of Droṇa Punished" },
    { number: 8, title: "Prayers by Queen Kuntī and Parīkṣit Saved" },
    { number: 9, title: "The Passing Away of Bhīṣmadeva in the Presence of Lord Kṛṣṇa" },
    { number: 10, title: "Departure of Lord Kṛṣṇa for Dvārakā" },
    { number: 11, title: "Lord Kṛṣṇa’s Entrance into Dvārakā" },
    { number: 12, title: "Birth of Emperor Parīkṣit" },
    { number: 13, title: "Dhṛtarāṣṭra Quits Home" },
    { number: 14, title: "The Disappearance of Lord Kṛṣṇa" },
    { number: 15, title: "The Pāṇḍavas Retire Timely" },
    { number: 16, title: "How Parīkṣit Received the Age of Kali" },
    { number: 17, title: "Punishment and Reward of Kali" },
    { number: 18, title: "Mahārāja Parīkṣit Cursed by a Brāhmaṇa Boy" },
    { number: 19, title: "The Appearance of Śukadeva Gosvāmī" }
];

export default function ModuleDetail() {
    const params = useParams();
    const id = params?.id;
    const isCanto1 = id === 'canto-1';

    const group1 = canto1Chapters.slice(0, 10);
    const group2 = canto1Chapters.slice(10);

    return (
        <AppLayout
            content={
                <ContentLayout
                    header={
                        isCanto1 ? (
                            <Header
                                variant="h1"
                                description="Śrīmad-Bhāgavatam"
                            >
                                Canto 1: Creation
                            </Header>
                        ) : undefined
                    }
                >
                    {isCanto1 ? (
                        <SpaceBetween size="l">
                            <Container
                                header={
                                    <Header
                                        variant="h2"
                                        description="10 Chapters"
                                    >
                                        <SpaceBetween direction="horizontal" size="xs">
                                            <Icon name="file" variant="subtle" />
                                            Chapters 1–10
                                        </SpaceBetween>
                                    </Header>
                                }
                            >
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {group1.map((chapter) => (
                                        <div key={chapter.number}>
                                            <Box variant="span" color="text-label" padding={{ right: "s" }}>
                                                Chapter {chapter.number}:
                                            </Box>
                                            {chapter.title}
                                        </div>
                                    ))}
                                </div>
                            </Container>

                            <Container
                                header={
                                    <Header
                                        variant="h2"
                                        description={`${group2.length} Chapters`}
                                    >
                                        <SpaceBetween direction="horizontal" size="xs">
                                            <Icon name="file" variant="subtle" />
                                            Chapters 11–19
                                        </SpaceBetween>
                                    </Header>
                                }
                            >
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {group2.map((chapter) => (
                                        <div key={chapter.number}>
                                            <Box variant="span" color="text-label" padding={{ right: "s" }}>
                                                Chapter {chapter.number}:
                                            </Box>
                                            {chapter.title}
                                        </div>
                                    ))}
                                </div>
                            </Container>
                        </SpaceBetween>
                    ) : (
                        <React.Fragment />
                    )}
                </ContentLayout>
            }
            navigationHide={true}
            toolsHide={true}
        />
    );
}
