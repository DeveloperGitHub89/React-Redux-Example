import { Alert, Col, Container, Row } from "react-bootstrap";

export function About(){
    return (
        <Container>
            <Container className="text-center mt-5">
                <Alert variant="success">This is about us</Alert>
            </Container>
            <Container className="mt-4">
                <Row>
                    <Col lg={6}>
                        <h1>Our Mission</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containin</p>
                    </Col>
                    <Col lg={6}>
                        <h1>Our Vision</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containin</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}