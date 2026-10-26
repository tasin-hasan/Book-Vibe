import React from "react";
import BookCard from "../shared/BookCard";
import { IBookType } from "@/types/books.type";

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

const Books = async () => {
  const booksData: IBookType[] = await getBooks();
   // console.log("From Books component", booksData);
  return (
    <div className="max-w-7xl mx-auto my-30">
      <h2 className="text-3xl text-center font-bold my-10">Books</h2>
      <div className=" grid grid-cols-3 gap-4 ">
        {booksData.slice(0,6).map((book) => {
          return (
            <div key={book.bookId}>
              <BookCard book={book}></BookCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
