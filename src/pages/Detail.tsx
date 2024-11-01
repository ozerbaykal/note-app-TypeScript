import { useOutletContext } from "react-router-dom"
import { Note } from "../types"

const Detail = () => {
    const note = useOutletContext<Note>()

    return (
        <div>Detail</div>
    )
}

export default Detail