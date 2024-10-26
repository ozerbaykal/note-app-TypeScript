import { FormEvent, useRef, useState } from "react"
import { Button, Col, Form, Row, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"
import ReactSelect from "react-select/creatable"
import { Tag } from "../../types.ts"

const CustomForm = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLTextAreaElement>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);


    //form gönderilince çalışır
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const title = inputRef.current?.value;
        const markdown = textRef.current?.value;
        console.log(title, markdown)








    }

    return (

        <Form
            onSubmit={handleSubmit}
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
                        <ReactSelect />
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