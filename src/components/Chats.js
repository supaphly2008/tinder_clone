import React from 'react'
import './chats.css'
import Chat from './Chat'

const chats = [
    {
        name: 'Angela Kee',
        message: 'Hello handsome!',
        timestamp: '20 seconds ago',
        profilePic: 'https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13.jpeg'
    },
    {
        name: 'Katie Wong',
        message: 'Wanna chill later?!',
        timestamp: '5 minutes ago',
        profilePic: 'https://tinyfac.es/data/avatars/03F55412-DE8A-4F83-AAA6-D67EE5CE48DA.jpeg'
    },
    {
        name: 'Crystal Clear',
        message: 'I am tired of work...',
        timestamp: '7 minutes ago',
        profilePic: ''
    },
    {
        name: 'Christina Ming',
        message: 'Let\'s go for a coffee?',
        timestamp: '1 day ago',
        profilePic: ''
    },
    {
        name: 'Ellie Kim',
        message: 'What movies do you like?',
        timestamp: '3 days ago',
        profilePic: ''
    }
]

const Chats = () => {
    return (
        <div className="chats">
            {chats.map(chat => <Chat key={chat.name} name={chat.name} message={chat.message} timestamp={chat.timestamp} profilePic={chat.profilePic} />)}
        </div>
    )
}

export default Chats
