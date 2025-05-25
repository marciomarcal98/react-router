import { Link } from "react-router"
import { useNavigate } from "react-router"

export function Home() {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Página Home</h1>

            <nav>
                <Link to={"/products"}>Produtos</Link>

                {/* useSearchParams */}
                <Link to={"/products?category=banho"}>Categoria</Link>

                <button type="button" onClick={() => navigate("/products")}>Ver produtos</button>
            </nav>
        </div>
    )
}