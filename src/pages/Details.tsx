import { useParams } from "react-router"

import { useNavigate } from "react-router"

export function Details() {
    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <div>
            {/* voltar para a exata página anterior do histórico do usuário */}
            <button onClick={() => navigate(-1)}>
                Voltar
            </button>
            <h1>Detalhes</h1>

            <span>
                ID do produto: <strong>{id}</strong>
            </span>
        </div>
    )
}