import "./styles.css"

import { Outlet } from "react-router"

export function Layout() {
    return (
        <div>
            <header className="user">
                <p>Olá, rodrigo</p>
            </header>

            <Outlet />

            <footer>
                <span className="copyright">Todos os direitos reservados</span>
            </footer>
        </div>
    )
}