import React, { Component} from 'react';
import ReactDOM from 'react-dom';

let bookList = [
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260 },
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 480 },
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304 }
]

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>By: {author}</p>
            <p>Pages: {pages} pages</p>
        </section>
    )
}

class Library extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            open: true
        }
    }
    render() {
        const { books } = this.props
        return (
            <div>
                <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
                {books.map(
                    (book, i) => <Book 
                                key={i}
                                title={book.title} 
                                author={book.author} 
                                pages={book.pages}/>
                )}
            </div>
        )
    }
}


ReactDOM.render(
    <Library books={bookList}/>,
    document.getElementById('root')
)