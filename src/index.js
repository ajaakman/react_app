import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

let bookList = [
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", },
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 480 },
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304 }
]

const Book = ({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>By: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes' : 'no!'}</p>
        </section>
    )
}

const Hiring = () => 
    <div>
        <p>The library is hiring.</p>
    </div>

const NotHiring = () => 
    <div>
        <p>The library is not hiring.</p>
    </div>

class Library extends React.Component {
   
    static defaultProps = {
        books: [
            {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000}
        ]
    }

    state = { 
        open: true,
        freeBookmark: false,
        hiring: false,
        data: [],
        loading: false
    }

    componentDidMount() {
        this.setState({loading:true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }    
    
    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        const { books } = this.props
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading 
                    ? "loading..." 
                    : <div>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h3>Library prouct of the week</h3>
                                    <h4>{product.name}</h4>
                                    <img alt={product.name} src={product.image} height={100}/>
                                </div>
                            )
                        })}
                    </div>
                }
                <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) => <Book 
                                key={i}
                                title={book.title} 
                                author={book.author} 
                                pages={book.pages}
                                freeBookmark={this.setState.freeBookmark}/>
                )}
            </div>
        )
    }
}

Library.propTypes = {
    books: PropTypes.array
}

Book.propTypes = {
    tite: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

ReactDOM.render(
    <Library books={bookList} />,
    document.getElementById('root')
)