"use client";

import { BookContext } from "@/context/BookContext";
import { IBookType } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBookType }) => {
  const { readBooks, setReadBooks } = useContext(BookContext);

  const handleReadBook = () => {
    const alreadyExist = readBooks.some((item) => item.bookId === book.bookId);

    if (alreadyExist) {
      toast.error(`${book.bookName} is already exist`);
      return readBooks;
    }

    setReadBooks((previousBooks) => {
      return [...previousBooks, book];
    });
    toast.success(`${book.bookName} is added`);

    // console.log("read book btn triggered", readBooks);
  };

  return (
    <button className="btn btn-success flex-1" onClick={() => handleReadBook()}>
      <span>♡</span> Add to Reading List
    </button>
  );
};

export default ReadButton;
