import { Button, Col, Container, Form, FormGroup, Row, Stack } from "react-bootstrap";
import { Note, Tag } from "../types";
import { Link } from "react-router-dom";

type Props = {
    availableTags: Tag[];
    notes: Note[];
};
const Main = ({ availableTags, notes }: Props) => {

    return (
        <Container className="mx-auto my-5">
            {/* Üst Kısım */}
            <Stack direction="horizontal" className="justify-content-between mb-4">
                <div className="d-flex gap-3 align-items-center">
                    <img src="/note_logo_2.png" alt="note-logo" width={45} />
                    <h1>Notlar</h1>
                </div>

                <Link to="/new">
                    <Button>Oluştur</Button>
                </Link>
            </Stack>

            {/* Form alanı */}
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Başlığa Göre Ara</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Col>


                    <Col>
                        <Form.Group>
                            <Form.Label> Etikete Göre Ara</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Col>



                </Row>



            </Form>

            {/* Not Listesi */}

            {notes.map((note) => (

                <div>Note</div>

            ))}




        </Container>
    );
};

export default Main;
