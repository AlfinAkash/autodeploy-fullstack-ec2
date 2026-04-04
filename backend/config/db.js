import pkg from 'pg'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

dotenv.config()
const { Pool } = pkg

export const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
})

const initDB = async () => {
  try {
    const sqlPath = path.join(process.cwd(), 'db', 'init.sql') 

    if (!fs.existsSync(sqlPath)) {
      throw new Error(`SQL file not found at path: ${sqlPath}`)
    }

    const sql = fs.readFileSync(sqlPath, 'utf8')
    await pool.query(sql)
    console.log('✅ Database tables created successfully!')
  } catch (err) {
    console.error('❌ Database initialization error:', err)
    process.exit(1) 
  }
}

initDB()