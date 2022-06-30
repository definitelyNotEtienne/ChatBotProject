import React, {useState} from 'react'
import Paimon from '../asset/paimon.f42328098795c5bf7251.webp'
import '../index.css'
import Chatbotinterface from "./chatbotinterface";

function Paimonbtn() {
    const [showChatUi, setShowChatUi] = useState(false);
        if (!showChatUi) {
            return(
                <img onClick={() => setShowChatUi(true)} src={Paimon} alt={Paimon} className="paimon"/>
            );
        } else {
            <Chatbotinterface/>
        }
}


export default Paimonbtn