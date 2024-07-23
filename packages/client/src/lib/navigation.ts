import { EventEmitter, EventSubscriber } from './eventEmitter';

export type NavigationItem = {
    onPop: () => void;
};

export class Navigator {
    private currentHash: string = window.location.hash;
    private local: NavigationItem[] = []; // Local(page) navigation stack

    get hash(): string {
        return this.currentHash;
    }

    private hashchangeEmitter: EventEmitter<(hash: string) => void> =
        new EventEmitter();

    get onhashchange(): EventSubscriber<(hash: string) => void> {
        return this.hashchangeEmitter;
    }

    constructor() {
        window.addEventListener('popstate', this.handlePopState);
        window.addEventListener('keydown', this.handleKeyDown, {
            capture: true,
            passive: false
        });

        history.scrollRestoration = 'manual';
    }

    private handlePopState = (_: PopStateEvent): void => {
        const hash = window.location.hash;
        this.local = [];
        this.changeHash(hash);
    };

    private handleKeyDown = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
            this.onEscape();
        }
    };

    private changeHash(hash: string): void {
        this.currentHash = hash.startsWith('#') ? hash : `#${hash}`;
        this.hashchangeEmitter.dispatch(this.currentHash);
    }

    private onEscape(): void {
        const currentItem = this.local.pop();
        if (currentItem) {
            currentItem.onPop();
            return;
        }

        this.back();
    }

    public pushLocal(item: NavigationItem): void {
        this.local.push(item);
    }

    public back(): void {
        history.back();
    }
}

const navigator = new Navigator();
export default navigator;
