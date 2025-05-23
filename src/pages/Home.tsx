import { Link } from "react-router";

export function Home() {
    return (
        <div>
            <h1>Página Home</h1>

            <nav>
                <Link to={"/products"}>Produtos</Link>
            </nav>
        </div>
    )
}