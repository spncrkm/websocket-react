import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import { Socket } from 'socket.io-client'


interface SocketProps {
    socket: Socket
}

const Chatbody = ({ socket }: SocketProps) => {
    const [messages, setMessages] = useState<{ text: string }[]>([]);

    useEffect(() => {
        socket.on('message', (emittedMessage) => {
            setMessages([...messages, emittedMessage])
        })
    }, [messages, socket])

  return (
    <Container className='chat-body'>
        <div className='chat-bubble'>
        {messages.map((message, idx) => (
            <Card key={idx}>
                <Card.Body className='text-bubble'>
                    <Card.Text>{message.text}</Card.Text>
                </Card.Body>
            </Card>
        ))}
        </div>
    </Container>
  )
}

export default Chatbody
