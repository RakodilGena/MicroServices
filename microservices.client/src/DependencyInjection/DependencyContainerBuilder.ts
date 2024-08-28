import { Container } from 'inversify';
import {IUrlProvider} from "../HttpHandlers/UrlProviders/IUrlProvider";
import {UrlProvider} from "../HttpHandlers/UrlProviders/UrlProvider";
import {IMessagesHttpHandler} from "../HttpHandlers/Messages/IMessagesHttpHandler";
import {MessagesHttpHandler} from "../HttpHandlers/Messages/MessagesHttpHandler";

export class DependencyContainerBuilder {
    static buildContainer(): Container {

        const container = new Container();

        container.bind<IUrlProvider>("IUrlProvider").to(UrlProvider);
        container.bind<IMessagesHttpHandler>("IMessagesHttpHandler").to(MessagesHttpHandler);

        return container;
    }
}
