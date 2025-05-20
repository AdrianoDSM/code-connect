const { PrismaClient } = require('../src/generated/prisma');
const db = new PrismaClient();
module.exports = db;
