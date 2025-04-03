import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const createUsers = async(data) => {
    return await prisma.user.create({data});
}

const getUsers = async() => {
    return await prisma.user.findMany();
}

export default {createUsers, getUsers};



