export type Page = {
    pageNumber: number,
    pageSize: number,
}

export type UserPageResult = {
    users: User[],
    total: number
}

export type User = {
    id: number;
    email: string;
    name: string;
    nickname: string | null;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}


