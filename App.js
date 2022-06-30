import React, {useState} from 'react'
import Landing from './component/landing';
import './App.css';
import BackgroundImage from './asset/2020032014410864090.jpeg'
import BotIcon from './asset/unknown.png'
import UserIcon from './asset/297896.png'
import LogoGenshin from './asset/download.png'


function App() {
    const [showChatUi, setShowChatUi] = useState(false)
    const [messages, setMessages] = useState([
        {
            "sender": "Paimon",
            "body": "Ad astra abyssosque! Welcome to the Obi Wan Adventurer's Guide! \n" +
                "I am Paimon, the emergency food at the Obi Wan Adventurers' Guide. It's my job to help you out with the game, Genshin Impact!"
        },
        {
            "sender": "Traveler",
            "body": "Hello"
        },
        {
            "sender": "Paimon",
            "body": "test2"
        },
        {
            "sender": "Traveler",
            "body": "test2"
        },
        {
            "sender": "Paimon",
            "body": "test2"
        },
        {
            "sender": "Traveler",
            "body": "test2"
        },
        {
            "sender": "Paimon",
            "body": "test2"
        },
        {
            "sender": "Traveler",
            "body": "test2"
        },
    ])

    if (!showChatUi) {
        return (
            <Landing/>
        );
    } else {
        return (
            <div className="wrapper">
                <img className="backgroundImage" src={BackgroundImage} alt={"background"}/>
                <div className="content-chat">
                    <header>
                        <img src={LogoGenshin} alt="header"/>
                    </header>
                    <div className="chat-wrapper">
                        <ul className="chat-feed">
                            {messages.map(message => {
                                if (message.sender === 'bot') {
                                    return (
                                        <li key={message.id} className="msg-bot">
                                            <img className="chat-username" alt="user-icon" src={BotIcon}/>
                                            <div className="chat-msg">
                                                Paimon:<br/>
                                                <hr/>
                                                {message.body}
                                            </div>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={message.id} className="msg-user">
                                            <img className="chat-username" alt="user-icon" src={UserIcon}/>
                                            <div className="chat-msg">
                                                Traveler:<br/>
                                                <hr/>
                                                {message.body}
                                            </div>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                    <footer>
                        <input type="text" placeholder="Write a message..." className="input-msg"/>
                        <button className="send-msg">Send</button>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
