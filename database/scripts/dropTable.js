import {pool} from "../index.js";

const sqlString = `DROP TABLE IF EXISTS ten-events;`;

async function dropTable() {
    const res = await pool.query(sqlString);
    console.log(res.command, "dropped table");
}


dropTable();