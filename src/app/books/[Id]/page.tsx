import ReadButton from "@/app/components/bookDetails/ReadButton";
import WishListButton from "@/app/components/bookDetails/WishListButton";
import { IBookType } from "@/types/books.type";
import Image from "next/image";

interface IparamsType {
  params: Promise<{
    Id: string;
  }>;
}

const getBooks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/booksData.json`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Data fetching failed: ", { cause: error });
  }
};

const BookDetailsPage = async ({ params }: IparamsType) => {
  const { Id } = await params;

  const allBooks: IBookType[] = await getBooks();

  const selectedBook = allBooks.find((book) => book.bookId === Number(Id));
  // console.log(selectedBook);

  if (!selectedBook) {
    return (
      <div className="flex min-h-60 items-center justify-center">
        <p className="text-base-content/60">No book selected.</p>
      </div>
    );
  }
  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <div className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-xl">
        <div className="grid grid-cols-1 gap-8 p-5 sm:p-8 md:grid-cols-[340px_1fr]">
          {/* Book Cover */}
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-full max-w-[340px] overflow-hidden rounded-xl bg-base-200 shadow-lg">
              <Image
                src={selectedBook.image}
                width={340}
                height={460}
                alt={`Cover of ${selectedBook.bookName}`}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <span className="badge badge-outline badge-lg">
              {selectedBook.category}
            </span>
          </div>

          {/* Book Information */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-success">
                Discover your next read
              </p>

              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                {selectedBook.bookName}
              </h1>

              <p className="mt-3 text-base-content/70">
                Written by{" "}
                <span className="font-semibold text-base-content">
                  {selectedBook.author}
                </span>
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="badge badge-warning gap-1 p-3 font-semibold">
                  ★ {selectedBook.rating} / 5
                </div>

                <span className="text-sm text-base-content/60">
                  {selectedBook.totalPages} pages
                </span>

                <span className="text-sm text-base-content/60">
                  Published in {selectedBook.yearOfPublishing}
                </span>
              </div>
            </div>

            <div className="divider my-0" />

            {/* Review */}
            <div>
              <h2 className="mb-3 text-xl font-bold">About This Book</h2>

              <p className="text-justify text-sm leading-7 text-base-content/75 sm:text-base">
                {selectedBook.review}
              </p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="mb-3 font-semibold">Genres & Tags</h3>

              <div className="flex flex-wrap gap-2">
                {selectedBook.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge badge-outline badge-success px-3 py-3"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Publishing Details */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-base-200 p-4">
                <p className="text-xs text-base-content/60">PUBLISHER</p>
                <p className="mt-1 font-semibold">{selectedBook.publisher}</p>
              </div>

              <div className="rounded-xl bg-base-200 p-4">
                <p className="text-xs text-base-content/60">PUBLICATION YEAR</p>
                <p className="mt-1 font-semibold">
                  {selectedBook.yearOfPublishing}
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="mt-auto flex flex-wrap gap-3 pt-2">
              <ReadButton book={selectedBook} />

              <WishListButton book={selectedBook} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPage;
