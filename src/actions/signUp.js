import bcrypt from 'bcrypt'
import db from '../db'

export default async function signUp(user) {
  const hashedPass = await bcrypt.hash(user.password, 10)
  return db.one(`INSERT INTO
                  users (name, email, password)
                 VALUES ($1, $2, $3)
                 RETURNING * `, [user.name, user.email, hashedPass])
}
