interface Header
{
    title: string,
    tag: string
}

export function Header(props: Header)
{
    const Tag = props.tag as keyof JSX.IntrinsicElements || "h1" as keyof JSX.IntrinsicElements;
    return <Tag>{props.title}</Tag>
}