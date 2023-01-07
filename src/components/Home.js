import { Alert, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export function Home(){
    const score=useSelector(state=>state.scoreReducer)
    return (
        <Container className="text-center mt-5">
            <Alert variant="success">
                Welcome to our app and score is {score}
            </Alert>
            <p>This is a dummy react application</p>
        </Container>
    );
}