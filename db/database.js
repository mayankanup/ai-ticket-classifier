import Database from 'better-sqlite3';

const db = new Database('tickets.db', { verbose: console.log });

db.exec(`
  CREATE TABLE IF NOT EXISTS tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT,
    priority TEXT,
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP
  );
`);

export {db};