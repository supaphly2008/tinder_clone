import React, { useState } from 'react'
import './chatScreen.css'
import Avatar from '@material-ui/core/Avatar'

const ChatScreen = () => {

    const [messages, setMessages] = useState([
        {
            name: 'Angela Kee',
            message: 'Hello handsome!',
            profilePic: 'https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13.jpeg'
        },
        {
            name: 'Angela Kee',
            message: 'What is the plan?',
            profilePic: 'https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13.jpeg'
        },
        {
            message: 'Hello handsome!',
        }
    ])

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
        </div>
    )
}

export default ChatScreen
