import { NextResponse } from 'next/server';

type LifecycleStatus = 'DRAFT' | 'PUBLISHED';

interface Chapter {
    chapterId: string;
    title: string;
    bookId: string;
    summary: string;
    sequenceNumber: number;
    lifecycleStatus: LifecycleStatus;
    createdBy: string;
    createdAt: string;
    lastModifiedBy: string;
    lastModifiedAt: string;
}

const mockChapters: Chapter[] = [
    {
        chapterId: "c1",
        title: "Introduction to Self-Realisation",
        bookId: "1",
        summary: "An introduction to the concepts of self-realisation.",
        sequenceNumber: 1,
        lifecycleStatus: "PUBLISHED",
        createdBy: "admin",
        createdAt: new Date().toISOString(),
        lastModifiedBy: "admin",
        lastModifiedAt: new Date().toISOString(),
    },
    {
        chapterId: "c2",
        title: "The Art of Dying",
        bookId: "1",
        summary: "Understanding the process of death and liberation.",
        sequenceNumber: 3,
        lifecycleStatus: "PUBLISHED",
        createdBy: "admin",
        createdAt: new Date().toISOString(),
        lastModifiedBy: "admin",
        lastModifiedAt: new Date().toISOString(),
    },
    {
        chapterId: "c3",
        title: "Practicing Yoga in the Modern Age",
        bookId: "1",
        summary: "Applying yoga principles in daily life.",
        sequenceNumber: 2,
        lifecycleStatus: "PUBLISHED",
        createdBy: "admin",
        createdAt: new Date().toISOString(),
        lastModifiedBy: "admin",
        lastModifiedAt: new Date().toISOString(),
    },
    {
        chapterId: "c4",
        title: "Draft Chapter",
        bookId: "1",
        summary: "This chapter should not be visible.",
        sequenceNumber: 4,
        lifecycleStatus: "DRAFT",
        createdBy: "admin",
        createdAt: new Date().toISOString(),
        lastModifiedBy: "admin",
        lastModifiedAt: new Date().toISOString(),
    },
    {
        chapterId: "bg1",
        title: "Observing the Armies on the Battlefield of Kuruksetra",
        bookId: "2",
        summary: "Arjuna sees his relatives on the battlefield.",
        sequenceNumber: 1,
        lifecycleStatus: "PUBLISHED",
        createdBy: "admin",
        createdAt: new Date().toISOString(),
        lastModifiedBy: "admin",
        lastModifiedAt: new Date().toISOString(),
    }
];

export async function GET(
    request: Request,
    { params }: { params: Promise<{ bookId: string }> }
) {
    const { bookId } = await params;

    const chapters = mockChapters
        .filter(c => c.bookId === bookId && c.lifecycleStatus === "PUBLISHED")
        .sort((a, b) => a.sequenceNumber - b.sequenceNumber);

    return NextResponse.json({ chapters });
}
