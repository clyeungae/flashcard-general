const mysql = require('mysql2/promise');
const dayjs = require('dayjs');

let connection;

exports.init = async function (_opts) {
  const opts = _opts || {
    host: 'db',
    user: 'sys',
    password: 'syspass',
    database: 'dev'
  };
  connection = await mysql.createConnection(opts);

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });
}

exports.selectRandomFlashCard = async function () {
  const stmt = "SELECT `hint`, `answer` FROM `flashcard` ORDER BY RAND() LIMIT 1";
  const [rs] = await connection.execute(stmt);
  return rs[0];
}

exports.selectFlashCard = async function (id) {
  const [rs] = await connection.execute(
    'SELECT * FROM `flashcard` WHERE `id` = ?',
    [id]
  );

  if (rs.length === 0) throw new Error('flashcard not found');
  return rs[0];
}

exports.insertFlashCard = async function (keyword, answer) {
  const [rs] = await connection.execute(
    'INSERT INTO `flashcard` VALUES(NULL, ?, ?, ?, ?)',
    [keyword, answer, dayjs().unix(), dayjs().unix()]
  );

  if (rs.length === 0) throw new Error('flashcard cannot be inserted');
  return rs;
}
