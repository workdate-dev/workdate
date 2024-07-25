import { Project, ProjectId, User, UserId } from './models.js';
import { Subject } from './subject.js';

export interface Result<TType extends string, TValue> {
    readonly type: TType;
    readonly value: TValue;
}

export interface UserRepo {
    get(
        id: UserId
    ): Subject<Result<'found', User> | Result<'not_found', unknown>>;
    create(): Subject<User>;
}

export interface ProjectRepo {
    get(
        id: ProjectId
    ): Subject<Result<'found', Project> | Result<'not_found', unknown>>;
    create(name: string): Subject<Project>;
    changeName(
        id: ProjectId,
        name: string
    ): Result<'ok', unknown> | Result<'denied', unknown>;
    delete(id: ProjectId): Result<'ok', unknown> | Result<'denied', unknown>;
}
