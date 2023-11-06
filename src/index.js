import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books';
import Book from './Book';

const Booklist = () => {
  return (
    <>
      <h1>Best Sellers in Books</h1>
      <section className="booklist">
        {books.map((book, index) => (
          <Book {...book} key={book.id} number={index}/>
        ))}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />);
