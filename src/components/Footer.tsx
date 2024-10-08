interface Footer
{
    name: string,
    date: string,
    time: string,
    aiUsed: string[]
}

export function Footer(props: Footer)
{
    return (
        <>
            <p>Az oldalt készítette: {props.name}</p>
            <p>A készítés dátuma: {props.date}</p>
            <p>A feladatra fordított idő: {props.time} perc.</p>

            <p>
                Nyilatkozat MI használatáról.
                Nem használtam MI-t a feladatmegoldáshoz.
                vagy:
                A feladatmegoldásban használtam MI-t, a felelősséget vállalom az elkészült tartalmakért.
                Az alábbi részeket készítettem MI-vel:
            </p>
            <ul>
                {
                    props.aiUsed.map((item, index) =>
                    (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </>
    )
}