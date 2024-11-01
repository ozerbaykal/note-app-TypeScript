import { useOutletContext } from "react-router-dom"

const Edit = () => {
    const note = useOutletContext()
    console.log(note)

    return (
        <div>Edit</div>
    )
}

export default Edit