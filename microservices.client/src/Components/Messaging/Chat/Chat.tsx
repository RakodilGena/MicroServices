import React, {useState} from "react";
import {Link} from "react-router-dom";
import {MessageDto} from "../../../Models/In/Messages/MessageDto";
import {Message} from "../Message/Message";
import {useInjection} from "inversify-react";
import {IMessagesHttpHandler} from "../../../HttpHandlers/Messages/IMessagesHttpHandler";
import {useEffect} from "react";
import {PaginationRequest} from "../../../Models/Out/Common/PaginationRequest";

export default function Chat() {
    const messagesHttpHandler: IMessagesHttpHandler
        = useInjection<IMessagesHttpHandler>("IMessagesHttpHandler");

    const [messages, setMessages] = useState<MessageDto[]>([]);

    useEffect(() => {
        if (messages.length === 0) {
            GetInitialMessages(setMessages)
        }
    }, []);


    return Render();


    function GetInitialMessages(
        setMessages: React.Dispatch<React.SetStateAction<MessageDto[]>>) {
        // let initialMessage = new MessageDto({
        //     Author: "Rakodil",
        //     SentAt: new Date(),
        //     Message: "This is initial message",
        //     ProducedBy: ["I-", "have-no-", "idea"],
        // });
        // setMessages([initialMessage, initialMessage]);

        const request = new PaginationRequest({count: 10, offset: 1})

        messagesHttpHandler.getMessages(request, setMessages);
    }

    function Render() {
        return (
            <div>
                <h1>This is chat component.</h1>

                <span>I'll put there my messages there</span>

                <Link to="/">
                    <h3>Back to dust</h3>
                </Link>

                <h4>This is the list of messages:</h4>
                <div>{ConvertMessages()}</div>
            </div>
        );

        function ConvertMessages() {
            let key = 0;
            return messages.map(message =>
                Message({key: key++, message: message})
            );
        }
    }
}
