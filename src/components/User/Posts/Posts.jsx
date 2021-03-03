import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Card, Button } from "react-bootstrap";
import './Posts.css'
function Posts({userId}) {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => setPost(res.data))
    }, [])
    return (
        <div className="posts">
                {post.map(posts => ( posts.id === userId :
                   <Card 
                    key={post.id}
                    style={{ width: '18rem' }}
                    className="mb-2"
                    bg={'dark'}
                    text={'white'}
                >
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>{posts.title}</Card.Title>
                    <Card.Text>{posts.body}</Card.Text>
                    <Button variant="primary">comments</Button>
                  </Card.Body>
                </Card>
                :
                <></>
                )
                )}
                
        </div>
    )
}
export default Posts;
