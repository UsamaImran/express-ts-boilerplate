const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT
const DB_URL = process.env.MONGO_DB_URL as string

export { PORT, DB_URL }
