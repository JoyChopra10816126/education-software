import React from 'react';
import Link from 'next/link';

const TopNav = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 bg-blue-900 text-white z-50 flex items-start pl-8 pt-4">
            <Link href="/" className="text-xl font-bold hover:cursor-pointer">
                Education software
            </Link>
        </nav>
    );
};

export default TopNav;
