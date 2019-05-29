import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Library from './Library';

let bookList = [
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", },
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 480 },
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304 }
]

ReactDOM.render(
    <Library books={bookList} />,
    document.getElementById('root')
)