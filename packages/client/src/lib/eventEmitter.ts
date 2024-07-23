type Listener<T extends (...args: any[]) => void> = {
    callback: T;
};

export interface EventSubscriber<T extends (...args: any[]) => void> {
    addListener(callback: T): void;
    removeListener(callback: T): void;
}

export class EventEmitter<T extends (...args: any[]) => void>
    implements EventSubscriber<T>
{
    private listeners: Listener<T>[] = [];

    public addListener(callback: T) {
        this.listeners.push({ callback });
    }

    public removeListener(callback: T) {
        this.listeners = this.listeners.filter(
            listener => listener.callback !== callback
        );
    }

    public dispatch(...args: Parameters<T>) {
        this.listeners.forEach(listener => listener.callback(...args));
    }
}
