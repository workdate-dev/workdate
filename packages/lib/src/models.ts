import { Brand } from './utils.js';

export type RichText = string;

export type EntityId<TEntity extends Entity<string>> =
    TEntity extends Entity<infer TId> ? TId : never;

export interface Entity<TId extends string> {
    readonly id: TId;
}

export type UserId = Brand<string, 'UserId'>;

export interface User extends Entity<UserId> {
    readonly email: string | undefined;
}

export type ProjectId = Brand<string, 'ProjectId'>;

export interface Project extends Entity<ProjectId> {
    readonly name: string;

    readonly ownerId: UserId;
}

export type MemberId = Brand<string, 'MemberId'>;

export interface Member extends Entity<MemberId> {
    readonly userId: UserId;
    readonly projectId: ProjectId;
}

export type ColumnId = Brand<string, 'ColumnId'>;

export interface Column extends Entity<ColumnId> {
    readonly name: string;

    readonly projectId: ProjectId;
}

export type TaskId = Brand<string, 'TaskId'>;

export interface Task extends Entity<TaskId> {
    readonly title: string;
    readonly body: RichText;

    readonly columnId: ColumnId;
}

export type CommentId = Brand<string, 'CommentId'>;

export interface Comment extends Entity<CommentId> {
    readonly body: RichText;

    readonly taskId: TaskId;
}

export type LabelId = Brand<string, 'LabelId'>;

export interface Label extends Entity<LabelId> {
    readonly title: string;
}

export type TaskLabelId = Brand<string, 'TaskLabel'>;

export interface TaskLabel extends Entity<TaskLabelId> {
    readonly taskId: TaskId;
    readonly labelId: LabelId;
}
