import BookCard from "../components/BookCard";

interface Book {
  id: string;
  title: string;
  coverImage: string;
  description: string;
}

async function getBooks(): Promise<Book[]> {
  try {
    const res = await fetch('http://localhost:3000/api/books', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch books');
    }
    const data = await res.json();
    return data.books;
  } catch (error) {
    console.error("Error loading books:", error);
    return [];
  }
}

export default async function Home() {
  const books = await getBooks();

  return (
    <main className="min-h-screen bg-transparent pt-4 px-3 pb-20">
      <div className="w-full grid grid-cols-2 gap-3">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              description={book.description}
              imageUrl={book.coverImage}
            />
          ))
        ) : (
          <p className="text-gray-500 mt-10">No books found.</p>
        )}
      </div>
    </main>
  );
}
