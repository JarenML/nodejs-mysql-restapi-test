import { pool } from '../db.js'

export const ping = async (req, res) => {
    const [ results] = await pool.query('SELECT "Pong" as Result');
    res.json(results[0]);
};