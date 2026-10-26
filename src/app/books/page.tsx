import React from "react";
import BookCard from "../components/shared/BookCard";
import { IBookType } from "@/types/books.type";
import path from "path";
import { readFile } from "fs/promises";

const getBooks = async () => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "booksData.json"
  );

  const file = await readFile(filePath, "utf-8");

  return JSON.parse(file);
};

const AllBooksPage = async () => {
  const booksData: IBookType[] = await getBooks();
  return (
    <div className="max-w-7xl mx-auto my-30">
      <h2 className="text-3xl text-center font-bold my-10">Books</h2>
      <div className=" grid grid-cols-3 gap-4 ">
        {booksData.map((book) => {
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

export default AllBooksPage;
