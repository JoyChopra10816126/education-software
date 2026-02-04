'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface Chapter {
    chapterId: string;
    title: string;
    bookId: string;
    summary: string;
    sequenceNumber: number;
    lifecycleStatus: 'DRAFT' | 'PUBLISHED';
}

export default function ChapterListPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const bookId = params.bookId as string;
    const bookTitle = searchParams.get('title') || 'Book Chapters';

    const [chapters, setChapters] = useState<Chapter[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchChapters() {
            try {
                const res = await fetch(`/api/books/${bookId}/chapters`);
                if (!res.ok) throw new Error('Failed to fetch chapters');
                const data = await res.json();
                setChapters(data.chapters);
            } catch (err) {
                setError('Failed to load chapters.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        if (bookId) {
            fetchChapters();
        }
    }, [bookId]);

    if (loading) {
        return (
            <main className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-gray-500">Loading chapters...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-red-500">{error}</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-gray-900">{bookTitle}</h1>

            {chapters.length > 0 ? (
                <ul className="space-y-4">
                    {chapters.map((chapter) => (
                        <li key={chapter.chapterId} className="border-b border-gray-100 pb-2">
                            <Link
                                href={`/books/${bookId}/chapters/${chapter.chapterId}`}
                                className="group flex items-center gap-4 hover:bg-gray-50 p-2 rounded-md transition-colors"
                            >
                                <span className="text-gray-400 font-mono w-6 text-right">
                                    {chapter.sequenceNumber}.
                                </span>
                                <span className="text-lg text-blue-600 group-hover:underline">
                                    {/* The prompt says "Each chapter title is a clickable link". 
                                       We link the whole row for better UX but styling title specifically. */}
                                    {chapter.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center py-10">
                    <p className="text-gray-500">No chapters found for this book.</p>
                </div>
            )}
        </main>
    );
}
