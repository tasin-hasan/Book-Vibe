"use client"
import React, { createContext, ReactNode, useState } from 'react';

export const BookContext = createContext({});

const BooksProvider = ({children}: {children: ReactNode}) => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishList, setwishList] = useState([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishList,
        setwishList
    };

    return <BookContext.Provider value={sharedData}>
        {children}
    </BookContext.Provider>
};

export default BooksProvider;