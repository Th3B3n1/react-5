import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import { Book } from "./magyarKonyvek"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Fetch } from "./Fetch";

export function PopularHungarianBooks()
{
    const [books, setBooks] = useState([] as Book[]);
    useEffect(() =>
    {
        Fetch("/magyarKonyvek.json").then(data => setBooks(data.books));
    }, [])
    return (
        <>
            <Header title={"Népszerű Magyar könyvek"} tag={"h1"} />
            <Header title={"Népszerű könyvek felsorolása"} tag={"h2"} />
            {books.map((book, index) => 
            {
                return (
                    <Card key={index} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Subtitle>{book.author}</Card.Subtitle>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>{book.genre}</ListGroup.Item>
                            <ListGroup.Item>{book.publisher}</ListGroup.Item>
                            <ListGroup.Item>{book.pages}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Subtitle><b>{book.price}$</b></Card.Subtitle>
                        </Card.Body>
                    </Card>
                )
            })}
            <Header title={"Népszerű Magyar könyvek akciós ára táblázatban"} tag={"h2"} />
            <Table striped="columns">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>author</th>
                        <th>price</th>
                        <th>genre</th>
                        <th>pages</th>
                        <th>publisher</th>
                    </tr>
                </thead>
                <tbody>
                {books.map((book, index) => 
                {
                    return (
                        <tr key={index}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td><p style={{textDecoration: "line-through", textDecorationColor: "red", textDecorationThickness: "4px"}}>{book.price}</p><p><b>{book.price * 0.9}</b></p></td>
                            <td>{book.genre}</td>
                            <td>{book.pages}</td>
                            <td>{book.publisher}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
            <Footer name={""} date={""} time={""} aiUsed={[]} />
        </>
    )
}