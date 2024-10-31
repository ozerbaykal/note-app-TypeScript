import { FormEvent, useRef, useState } from "react"
import { Button, Col, Form, Row, Stack } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import ReactSelect from "react-select/creatable"
import { Tag } from "../../types.ts"
import { v4 } from "uuid"
import { CreateProps } from "../../pages/Create.tsx"

const CustomForm = ({ handleSubmit, createTag, availableTags }: CreateProps) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLTextAreaElement>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

    const navigate = useNavigate();



    //form gönderilince çalışır
    const handleForm = (e: FormEvent) => {
        e.preventDefault();


        // inputlardaki verilere eriş
        const title = inputRef.current?.value || "";
        const markdown = textRef.current?.value as string;

        //yeni oluşan note 'u state/locale'e kaydet
        handleSubmit({
            title,
            markdown,
            tags: selectedTags,


        })
        //anasayfaya yönlendir
        navigate("/")

    }

    return (

        <Form
            onSubmit={handleForm}
            className="my-5">
            {/* başlık etiket inputu */}
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Başlık</Form.Label>
                        <Form.Control ref={inputRef} />
                    </Form.Group>


                </Col>



                <Col>
                    <Form.Group>
                        <Form.Label>Etiketler</Form.Label>
                        <ReactSelect
                            options={availableTags}
                            onChange={(allTags) => setSelectedTags(allTags as Tag[])}


                            onCreateOption={(text: string) => {
                                //etiket nesnesi oluştur
                                const newTag: Tag = { label: text, value: v4() }


                                //todo locale kaydet
                                createTag(newTag)

                                //seçili etiketler state 'ine ekle
                                setSelectedTags([...selectedTags, newTag])

                            }} value={selectedTags} className="text-black" isMulti />
                    </Form.Group>
                </Col>


            </Row>
            {/* içerik  */}
            <Form.Group className="mt-4">
                <Form.Label>içerik (markdown destekler)</Form.Label>
                <Form.Control ref={textRef} as="textarea" style={{ minHeight: "300px", maxHeight: "500px" }} />


            </Form.Group>

            {/* butonlar */}
            <Stack direction="horizontal" className="justify-content-end mt-5" gap={4}>
                <Link to={".."} >
                    <Button type="button" variant="secondary">Geri</Button>
                </Link>
                <Button type="submit">Kaydet</Button>



            </Stack>


        </Form>
    )
}

export default CustomForm