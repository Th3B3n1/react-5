import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Phone } from './technikaiKutyuk';
import { Header } from './Header';
import { Footer } from './Footer';
import { Fetch } from './Fetch';

export function TechStuff()
{
  const [phones, setPhones] = useState([] as Phone[])
  useEffect(() =>
  {
    Fetch("/technikaiKutyuk.json").then(data => setPhones(data.phones));
  }, [])
  return (
    <>
      <Header title={"Technikai kütyük"} tag={"h1"} />
      {phones.map((phone, index) => 
      {
        return (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>{phone.brand} {phone.model}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{phone.features.battery}</ListGroup.Item>
              <ListGroup.Item>{phone.features.camera}</ListGroup.Item>
              <ListGroup.Item>{phone.features.storage}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Subtitle><b>{phone.price}$</b></Card.Subtitle>
            </Card.Body>
          </Card>
        )
      })}
      <Footer name={''} date={''} time={''} aiUsed={[]} />
    </>
  )
}