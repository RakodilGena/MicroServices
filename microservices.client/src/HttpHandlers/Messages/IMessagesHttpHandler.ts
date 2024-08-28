import {PaginationRequest} from "../../Models/Out/Common/PaginationRequest";
import {MessageDto} from "../../Models/In/Messages/MessageDto";
import React from "react";

export interface IMessagesHttpHandler {
    getMessages(
        request: PaginationRequest,
        setMessagesFunc: React.Dispatch<React.SetStateAction<MessageDto[]>>)
        : void;
}
