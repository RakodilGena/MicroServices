import {IMessagesHttpHandler} from "./IMessagesHttpHandler";
import {PaginationRequest} from "../../Models/Out/Common/PaginationRequest";
import {MessageDto} from "../../Models/In/Messages/MessageDto";
import axios from 'axios'
import { injectable, inject } from 'inversify';
import {IUrlProvider} from "../UrlProviders/IUrlProvider";
import {HttpErrorsHandler} from "../ErrorsHandling/HttpErrorsHandler";
import React from "react";

@injectable()
export class MessagesHttpHandler implements IMessagesHttpHandler {

    @inject("IUrlProvider")
    private urlProvider: IUrlProvider;

    getControllerRouteV1():string {
        return this.urlProvider.getBaseUrl() + "/v1/Messages"
    };

    getMessages(
        request: PaginationRequest,
        setMessagesFunc: React.Dispatch<React.SetStateAction<MessageDto[]>>) {

        const params = {
            count: request.count,
            offset: request.offset
        };

        const url = this.getControllerRouteV1();

        axios.get(url, {params: params})
            .then((resp) => {
                const messages = resp.data as MessageDto[];
                setMessagesFunc(messages);
            })
            .catch((error) => {
                HttpErrorsHandler.handle(error);
            });
    }
}
