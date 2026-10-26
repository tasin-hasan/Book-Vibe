"use client";

import { BookContext } from "@/context/BookContext";
import { IBookType } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBookType }) => {
  const { wishList, setWishList } = useContext(BookContext);

  const handleWishlist = () => {
    const alreadyExist = wishList.some((item) => item.bookId === book.bookId);

    if (alreadyExist) {
      toast.error(`${book.bookName} is already exist`);
      return wishList;
    }

    setWishList((wishList) => {
      return [...wishList, book];
    });
    toast.success(`${book.bookName} is added`);
    // console.log("read book btn triggered", wishList);
  };

  return (
    <button className="btn btn-success flex-1" onClick={() => handleWishlist()}>
      Add to Wishlist
    </button>
  );
};

export default WishListButton;
