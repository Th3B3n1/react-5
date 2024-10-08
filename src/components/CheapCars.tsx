import { useEffect, useState } from "react"
import { Footer } from "./Footer";
import { Header } from "./Header";

interface CheapCars
{
    id: number,
    brand: string,
    price: string
}

export function CheapCars()
{
    const [cars, setCars] = useState([] as CheapCars[])
    useEffect(() =>
    {
        fetch("/olcsoAutok.json")
        .then(response => response.json())
        .then(data => setCars(data.cars));
    }, []);
    return (
        <>
            <Header title={"Olcsó Autók"} tag={"h1"} />
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>brand</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                {cars.map((car, index) =>
                {
                    return (
                        <tr key={index}>
                            <td>{car.id}</td>
                            <td>{car.brand}</td>
                            <td>{car.price}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <Footer name={""} date={""} time={""} aiUsed={[]} />
        </>
    )
}