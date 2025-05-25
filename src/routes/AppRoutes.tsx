import { Routes, Route } from "react-router"

import { Home } from "../pages/Home"
import { Products } from "../pages/Products"
import { NotFound } from "../pages/NotFound"
import { Details } from "../pages/Details"
import { Layout } from "../components/Layout"

export function AppRoutes() {
    return (
        <Routes>
            {/* Compartilhar Layout com várias rotas */}
            <Route path="/" element={<Layout />}>
                <Route path="/" index element={<Home />} />
                <Route path="/products" element={<Products />} />

                {/* rota com parâmetros */}
                <Route path="/details/:id" element={<Details />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}