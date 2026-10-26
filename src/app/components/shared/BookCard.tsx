import { IBookType } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBookProps {
    book: IBookType
}

const BookCard = ({book} : IBookProps) => {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl sm:p-5">
      {/* Book cover */}
      <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl bg-gray-50 p-5 sm:h-72">
        <Image
          src={book.image}
          alt={`Cover of ${book.bookName}`}
          width={200}
          height={260}
          className="h-full w-auto max-w-full rounded-md object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book information */}
      <div className="mt-3 flex flex-1 flex-col">
        <h2 className="text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-green-700">
          {book.bookName}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          By <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {book.review}
        </p>

        {/* Rating and category */}
        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="badge badge-outline badge-success">
            {book.category}
          </span>

          <div className="flex items-center gap-1 text-sm font-semibold text-gray-800">
            <span className="text-amber-500">★</span>
            {book.rating.toFixed(1)}
          </div>
        </div>

        {/* Publishing details */}
        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4 text-sm">
          <div>
            <p className="text-xs text-gray-400">Pages</p>
            <p className="mt-1 font-semibold text-gray-700">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="mt-1 font-semibold text-gray-700">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* Action button */}
        <Link
          href={`/books/${book.bookId}`}
          className="btn btn-outline btn-success mt-5 w-full rounded-xl"
        >
          View Details
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
};

export default BookCard;
