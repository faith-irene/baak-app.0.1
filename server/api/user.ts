import { getUser } from "../controllers/user";

export default defineEventHandler(async (event) => {
    return await getUser(event);
})