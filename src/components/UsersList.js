import { Component } from "react";
import { Alert, Container, Table } from "react-bootstrap";

export class UsersList extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            isError:false,
            isDataFetched:false
        }
    }
    async componentDidMount() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data);
            this.setState({ users: data,isDataFetched:true });
            
        } catch (error) {
            console.log(error);
            this.setState({isError:true});
        }

    }
    render() {
        return (

            <Container>
                <Container className="mt-5">
                    <Alert variant="success">This is list of users</Alert>
                </Container>
                <Container className="mt-4">
                    {
                        this.state.isError?
                        <h1>Internet Disconnected</h1>
                        :
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
                                this.state.users.map((item) => {
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
                    }
                    

                </Container>
            </Container>
        )
    }
}