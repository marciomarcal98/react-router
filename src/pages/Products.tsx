import { Link } from "react-router"

import { useSearchParams } from "react-router"

export function Products() {
    const [searchParams] = useSearchParams()
    const category = searchParams.get("category")

    return (
        <div>
            <Link to={"/"}>Voltar</Link>

            <h1>Produtos</h1>

            {category && (
                <span>Categoria: <strong>{category}</strong></span>
            )}
        </div>
    )
}