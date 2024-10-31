import { Container } from "react-bootstrap"
import CustomForm from "../components/Form"
import { NoteData, Tag } from "../types"

export type CreateProps = {

    handleSubmit: (noteData: NoteData) => void;
    createTag: (tag: Tag) => void;
    availableTags: Tag[];
}

const Create = ({ handleSubmit, createTag, availableTags }: CreateProps) => {
    return (
        <Container className="py-5">
            <h2>Yeni Not oluştur</h2>

            <CustomForm createTag={createTag} handleSubmit={handleSubmit} availableTags={availableTags} />


        </Container>
    )
}

export default Create