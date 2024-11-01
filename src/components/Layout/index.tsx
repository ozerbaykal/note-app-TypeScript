import { Navigate, Outlet, useParams } from "react-router-dom"
import { Note } from "../../types"

type Props = {

    notes: Note[],
}

const Layout = ({ notes }: Props) => {

    //url deki elemanın idsini al
    const { id } = useParams()

    //notes dizisinde elamanı ara
    const found = notes.find((i) => i.id === id);

    //bulamazsak anasayfya yönlendir

    if (!found) return <Navigate to="/" replace />

    //parent route içerisinde altroute'u (child) renderla
    //note verisini alt route a gönder
    return (

        <Outlet context={found} />


    )
}

export default Layout