import { Page, UserPageResult } from "../../../types/user-types"
import { prisma } from "../../prisma"

export async function getUsersPage(query: Page): Promise<UserPageResult> {
    const page = query.pageNumber || 0
    const perPage = query.pageSize || 10

    const users = await prisma.user.findMany({
        skip: page * perPage,
        take: perPage
    });

    const total = await prisma.user.count();

    return {
        users: users,
        total: total
    }
    
}