import React from "react";
import {MessageDto} from "../../../Models/In/Messages/MessageDto";
import moment from "moment";

type MessageProps = {
    message: MessageDto,
    key: number
}

export const Message = (props: MessageProps) => {
    const message = props.message;
    const date = moment(message.sentAt).format('hh:mm DD.MM.yy');
    const producers = ConvertProducers(message.producedBy);

    return <div
        key={props.key}
        style={{marginBottom: 10}}>
        <div>
            <span>Sender: {message.author}</span>
            <span style={{marginLeft: 20}}>{date}</span>
        </div>
        <div>
            <span style={{marginRight: 20}}>K:{props.key}</span>
            <span>Message: {message.message}</span>
        </div>
        <div>
            <span>ProducedBy: </span>
            {producers}
        </div>

    </div>
}

function ConvertProducers(producers: string[]) {
    return producers.map(producer =>
        <span key={producer}>{producer}</span>
    );
}
