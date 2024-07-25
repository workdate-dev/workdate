export interface Sub<T> {
    next?(value: T): void;
    complete?(): void;
}
export type Unsub = () => void;

export interface Subject<T> {
    value: T;
    subscribe(sub: Sub<T>): Unsub;
}

interface SubBox<T> {
    readonly id: object;
    readonly sub: Sub<T>;
}

export class SubjectImpl<T> implements Subject<T> {
    private subs: SubBox<T>[] = [];

    constructor(private _value: T) {}

    get value(): T {
        return this._value;
    }

    next(value: T) {
        this._value = value;
        this.subs.forEach(({ sub }) => sub.next?.(value));
    }

    complete() {
        this.subs.forEach(({ sub }) => sub.complete?.());
    }

    subscribe(sub: Sub<T>): Unsub {
        const id = {};
        this.subs.push({ id, sub });
        return () => (this.subs = this.subs.filter(x => x.id !== id));
    }
}
