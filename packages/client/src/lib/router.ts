import { EventEmitter, EventSubscriber } from './eventEmitter';
import navigation from './navigation';

export interface RouterState {
    projectId?: number;
    taskId?: number;
}

export class Router {
    private innerState: RouterState = {};
    private routeChangeEmitter = new EventEmitter<
        (state: RouterState) => void
    >();

    get onRouteChange(): EventSubscriber<(state: RouterState) => void> {
        return this.routeChangeEmitter;
    }

    constructor() {
        this.handleHashChange(navigation.hash);
        navigation.onhashchange.addListener(this.handleHashChange);
    }

    destroy() {
        navigation.onhashchange.removeListener(this.handleHashChange);
    }

    private handleHashChange = (hash: string) => {
        if (hash.startsWith('#p')) {
            this.innerState = { projectId: parseInt(hash.slice(2)) };
        } else if (hash.startsWith('#t')) {
            this.innerState = { taskId: parseInt(hash.slice(2)) };
        } else {
            this.innerState = {};
        }

        this.routeChangeEmitter.dispatch(this.innerState);
    };

    public get state(): RouterState {
        return this.innerState;
    }
}

const router = new Router();
export default router;
