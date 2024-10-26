import { Col, Form, Row } from "react-bootstrap"

const CustomForm = () => {
    return (

        <Form className="my-5">
            {/* başlık etiket inputu */}
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Başlık</Form.Label>
                        <Form.Control />
                    </Form.Group>


                </Col>



                <Col>
                    <Form.Group>
                        <Form.Label>Etiketler</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Col>


            </Row>
            {/* içerik  */}
            <Form.Group className="mt-4">
                <Form.Label>içerik (markdown destekler)</Form.Label>
                <Form.Control as="textarea" style={{ minHeight: "300px", maxHeight: "500px" }} />


            </Form.Group>

        </Form>
    )
}

export default CustomForm