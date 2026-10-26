"use client";
import { BookContext } from "@/context/BookContext";
import { IBookType } from "@/types/books.type";
import Image from "next/image";
import React, { useContext, useState } from "react";
import ListedBookCard from "../components/shared/ListedBookCard";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BookContext);

  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  console.log(sortBy);

  console.log(readBooks);

  const sortBooks = (books: IBookType[])=> {
    const sortedBooks = [...books];

    if(sortBy === "rating") {
        sortedBooks.sort((a, b) => b.rating - a.rating);
    }else if(sortBy === "pages") {
        sortedBooks.sort((a, b)=> b.totalPages - a.totalPages);
    }else if(sortBy === "year") {
        sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return sortedBooks;

  }

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlistBooks = sortBooks(wishList);
  return (
    <div className="max-w-7xl mx-auto mt-6  w-full">
      <h1 className="text-center text-2xl font-bold bg-amber-100 py-5 mb-6 rounded-lg">
        Listed Books
      </h1>

      <div className="my-8 text-center">
        <select
        value={sortBy}
        onChange={(e)=> setSortBy(e.target.value as "rating" | "pages" | "year")}
        className="select select-ghost">
          <option value="rating" >Rating</option>
          <option value="pages" >No. of Pages</option>
          <option value="year" >Publishd year</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: IBookType) => (
              <ListedBookCard key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-lg font-semibold text-center">
              No Read Books Found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishList.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 ">
          {sortedWishlistBooks.length > 0 ? (
            sortedWishlistBooks.map((book: IBookType) => (
              <ListedBookCard key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-lg font-semibold text-center">
              No Wishlist Books Found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
