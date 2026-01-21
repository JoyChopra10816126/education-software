"use client";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Icon from "@cloudscape-design/components/icon";
import Link from "@cloudscape-design/components/link";

interface Module {
    id: string;
    name: string;
    description: string;
}

const ssrChapters = [
    { number: 1, title: "Learning the Science of the Soul" },
    { number: 2, title: "Choosing a Spiritual Master" },
    { number: 3, title: "Looking at the Cultural Background" },
    { number: 4, title: "Understanding Kṛṣṇa and Christ" },
    { number: 5, title: "Practicing Yoga in the Age of Quarrel" },
    { number: 6, title: "Finding the Cure for Today’s Social Ills" },
    { number: 7, title: "Returning to the Eternal Religion" },
    { number: 8, title: "Reaching Life’s Perfection" }
];

const modulesData: Module[] = [
    // Existing modules if any can be added here
];

interface ModulesProps {
    hideHeader?: boolean;
}

export default function Modules({ hideHeader = false }: ModulesProps) {
    return (
        <SpaceBetween size="l">
            <Box padding={{ top: "l" }}>
                <Container>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                        {ssrChapters.map((chapter) => (
                            <Link
                                key={chapter.number}
                                href={`/chapter/${chapter.number}`}
                                variant="primary"
                                fontSize="body-m"
                            >
                                <div
                                    style={{
                                        padding: '12px 0',
                                        borderBottom: '1px solid #eaeded', // AWS border color
                                        cursor: 'pointer',
                                        transition: 'background-color 0.2s',
                                    }}
                                    className="chapter-item"
                                >
                                    <div style={{ padding: '4px 8px' }}>
                                        <SpaceBetween direction="horizontal" size="s">
                                            <Box variant="h3" color="text-label">
                                                Chapter {chapter.number}
                                            </Box>
                                            <Box variant="h3" color="text-status-info">
                                                {chapter.title}
                                            </Box>
                                        </SpaceBetween>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Box>
        </SpaceBetween>
    );
}
