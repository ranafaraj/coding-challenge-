import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Card , Button} from "react-bootstrap";
import { Link} from "react-router-dom";

function Users({setUserId}) {
    const [listOfUser, setListOfUser] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => setListOfUser(res.data))
    }, [])
    return (
        <div className='user-card'>
                {listOfUser.map(user => <Card 
                    key={user.id}
                    style={{ width: '50rem' }}
                    className="mb-2"
                    bg={'dark'}
                    text={'white'}
                >
                    <Card.Header>{user.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>{user.company.bs}</Card.Title>
                        <Card.Text>{user.company.catchPhrase}</Card.Text>
                        <Button onClick={()=> setUserId(user.id)}>
                           <Link to ={`/${user.id}`}/>
                           Posts
                        </Button>
                        
                    </Card.Body>
                </Card>
                )}
        </div>
    )
}
export default Users;
