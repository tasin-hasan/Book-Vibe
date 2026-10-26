"use client"
import { IBookType } from '@/types/books.type';
import React, { createContext, ReactNode, useState } from 'react';

interface IBookContext {
  readBooks: IBookType[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBookType[]>>;
  wishList: IBookType[];
  setWishList: React.Dispatch<React.SetStateAction<IBookType[]>>;
}

export const BookContext = createContext<IBookContext>({
    readBooks: [],
    setReadBooks: ()=> {},
    wishList: [],
    setWishList: ()=> {}
});

const BooksProvider = ({children}: {children: ReactNode}) => {
    const [readBooks, setReadBooks] = useState<IBookType[]>([]);
    const [wishList, setWishList] = useState<IBookType[]>([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishList,
        setWishList
    };

    return <BookContext.Provider value={sharedData}>
        {children}
    </BookContext.Provider>
};

export default BooksProvider;