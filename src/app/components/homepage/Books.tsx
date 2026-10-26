import React from "react";
import BookCard from "../shared/BookCard";
import { IBookType } from "@/types/books.type";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000//booksData.json");
  const data = await response.json();
  return data;
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
