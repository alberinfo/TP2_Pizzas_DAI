import config from './dbconfig.js';
import sql from 'mssql';

let pool = await sql.connect(config);
let result = await pool.request().query("SELECT TOP 2 * FROM Pizza");

console.log(result.recordsets.length);
console.log(result.recordsets[0].length);
console.log(result.recordsets[0]);
console.log(result.recordset);
console.log(result.returnValue);
console.log(result.output);
console.log(result.rowsAffected);

process.exit();