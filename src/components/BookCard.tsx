import React from 'react';
import Image from 'next/image';

interface BookCardProps {
    title?: string;
    description?: string;
    imageUrl?: string;
}

const BookCard = ({
    title = "Book Title Placeholder",
    description = "This is a placeholder description for the book. It gives a brief overview of the content and engages the reader.",
    imageUrl = "/placeholder-book.jpg"
}: BookCardProps) => {
    return (
        <div className="flex flex-col w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            {/* Image Container - Aspect Ratio 2:3 for standard book cover */}
            <div className="relative w-full aspect-[2/3] bg-gray-100">
                {imageUrl && imageUrl !== "/placeholder-book.jpg" ? (
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span className="text-xs">No Image</span>
                    </div>
                )}
            </div>

            {/* Content Container */}
            <div className="p-3 flex flex-col gap-1.5">
                <h3 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2">
                    {title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BookCard;
