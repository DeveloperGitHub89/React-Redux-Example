import { useEffect, useState } from "react";
import { Alert, Container, Table } from "react-bootstrap";

export function UsersData() {

    const [users, setUsers] = useState([]);

    const fetchUsers= async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    }
    
    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <Container>
            <Container className="mt-5 text-center">
                <Alert variant="success">This is list of users</Alert>
            </Container>
            <Container className="mt-4">
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.username}</td>
                                        <td>{item.phone}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </Container>
    );
}