import { NextResponse } from 'next/server';

type LifecycleStatus = 'DRAFT' | 'PUBLISHED';

interface Book {
    id: string;
    title: string;
    coverImage: string;
    description: string;
    sequenceNumber: number;
    lifecycleStatus: LifecycleStatus;
    createdBy: string;
    createdAt: string;
    lastModifiedBy: string;
    lastModifiedAt: string;
}

const mockBooks: Book[] = [
    {
        id: "1",
        title: "The Science of Self-Realisation",
        coverImage: "/en-ssr.jpg",
        description: "A collection of articles and essays by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada on the science of yoga and self-realisation.",
        sequenceNumber: 1,
        lifecycleStatus: "PUBLISHED",
        createdBy: "admin",
        createdAt: new Date().toISOString(),
        lastModifiedBy: "admin",
        lastModifiedAt: new Date().toISOString(),
    },
    {
        id: "2",
        title: "Bhagavad-gita As It Is",
        coverImage: "/en-bg.jpg",
        description: " The largest-selling edition of the Bhagavad-gita in the Western world, presenting the original Sanskrit text, Roman transliteration, English equivalents, translation and elaborate purports.",
        sequenceNumber: 2,
        lifecycleStatus: "PUBLISHED",
        createdBy: "admin",
        createdAt: new Date().toISOString(),
        lastModifiedBy: "admin",
        lastModifiedAt: new Date().toISOString(),
    }
];

export async function GET() {
    // Sort books by sequenceNumber ascending
    const sortedBooks = [...mockBooks].sort((a, b) => a.sequenceNumber - b.sequenceNumber);

    return NextResponse.json({ books: sortedBooks }, { status: 200 });
}
