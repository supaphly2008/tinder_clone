import React, { useState } from 'react'
import './chatScreen.css'
import Avatar from '@material-ui/core/Avatar'

// const messages = [
//     {
//         name: 'Angela Kee',
//         message: 'Hello handsome 😜!',
//         profilePic: 'https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13.jpeg'
//     },
//     {
//         name: 'Angela Kee',
//         message: 'What is the plan?',
//         profilePic: 'https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13.jpeg'
//     },
//     {
//         message: 'Hey there!! 😎',
//     }
// ];

const ChatScreen = () => {

    const [userInput, setUserInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Angela Kee',
            message: 'Hello handsome 😜!',
            profilePic: 'https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13.jpeg'
        },
        {
            name: 'Angela Kee',
            message: 'What is the plan?',
            profilePic: 'https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13.jpeg'
        },
        {
            message: 'Hey there!! 😎',
        }
    ])

    const onInputChangeHandler = (e) => {
        setUserInput(e.target.value)
    }

    // send message event
    const onSendHandler = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: userInput }])
        setUserInput('')
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with Angela Kee on 10/08/20</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar className="chatScreen__img" alt={message.name} src={message.profilePic} />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__text chatScreen__text--user">{message.message}</p>
                        </div>
                    )

            ))}
            <form className="chatScreen__send-form">
                <input onChange={onInputChangeHandler} value={userInput} className="chatScreen__send-form__input" type="text" placeholder="Type in the message..."></input>
                <button onClick={onSendHandler} type="submit" className="chatScreen__send-form__send">SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
