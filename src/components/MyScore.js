import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export function MyScore(){
    const score=useSelector(state=>state.scoreReducer)
    return (
        <>
            <Container>
                <h1>Your score is {score}</h1>
            </Container>
        </>
    );
}