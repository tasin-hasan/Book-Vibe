import { IBookType } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListedBookCard = ({ book }: { book: IBookType }) => {
  return (
    <div className="grid grid-cols-1 gap-6 mb-[25px]" key={book.bookId}>
      <div className="card lg:card-side bg-base-100 shadow-md border border-gray-200 p-4">
        <figure className="shrink-0">
          <Image
            src={book.image}
            alt={book.bookName}
            width={150}
            height={200}
            className="rounded-lg object-cover"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{book.bookName}</h2>
          <p>Author: {book.author}</p>
          <p>{book.category}</p>
          <p>Rating: {book.rating}</p>

          <div className="card-actions justify-end">
            <Link href={`/books/${book.bookId}`}>
              <button className="btn btn-success">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
